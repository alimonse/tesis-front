import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleModalFormComponent } from './modals/schedule-modal-form/schedule-modal-form.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  schedules = [
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
      horario: '15h00 - 16h00',
      dia: 'Lunes',
    },
  ];

  constructor(public dialog: MatDialog) {}

  create() {
    const dialogRef = this.dialog.open(ScheduleModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        console.log('modal');
      },
    });
  }

  edit(service: any) {
    console.log(service);
    const dialogRef = this.dialog.open(ScheduleModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
      data: {},
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        console.log('modal');
      },
    });
  }
}
