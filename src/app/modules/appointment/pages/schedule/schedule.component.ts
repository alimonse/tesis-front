import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleModalFormComponent } from './modals/schedule-modal-form/schedule-modal-form.component';
import { DayService } from './services/day.service';
import { HourService } from './services/hour.service';
import { DayInterface } from './interfaces/day.interface';
import { HourInterface } from './interfaces/hour.interface';
import { ServiceInterface } from '../service/interfaces/service.interface';
import { ScheduleInterface } from './interfaces/schedule.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  schedules: ScheduleInterface[] = [];

  constructor(
    private readonly _dayService: DayService,
    private readonly _hourService: HourService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getSchedules();
  }

  create() {
    const dialogRef = this.dialog.open(ScheduleModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
    });

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.schedules.unshift(value);
        }
      },
    });
  }

  edit(service: ScheduleInterface) {
    const dialogRef = this.dialog.open(ScheduleModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
      data: service,
    });

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          const idItem = this.schedules.findIndex(
            (item) => item.id === service.id
          );
          this.schedules[idItem] = value;
        }
      },
    });
  }

  getSchedules() {
    const query: any = {
      where: {},
      order: {
        id: 'ASC',
      },
    };
    query.relations = ['horarioDia', 'horarioDia.prestacion'];
    const getHours$ = this._hourService.findAll(
      `busqueda=${JSON.stringify(query)}`
    );
    getHours$.subscribe({
      next: (value) => {
        if (!value[0].length) {
          console.log('sin data');
        }
        this.schedules = value[0]
          .map((item) => this.formatDataTable(item))
          .flat();
      },
      error: (err) => {
        console.log(err);
        this.schedules = [];
      },
    });
  }

  formatDataTable(horarioHora: HourInterface): ScheduleInterface[] {
    const { horarioDia } = horarioHora;
    const { prestacion } = horarioDia as DayInterface;
    const data = (prestacion as ServiceInterface[]).map((item) => {
      const hora = horarioHora as HourInterface;
      const dia = horarioDia as DayInterface;
      const { id: idPrestacion } = item;
      const { id: idDia } = dia;
      delete dia.id;
      delete hora.horarioDia;
      delete item.id;
      return {
        ...hora,
        ...dia,
        ...item,
        idPrestacion,
        idDia,
      };
    });
    return data;
  }
}
