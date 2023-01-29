import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScheduleFormComponent } from '../../forms/schedule-form/schedule-form.component';
import { ServiceInterface } from '../../../service/interfaces/service.interface';
import { DayService } from '../../services/day.service';
import { HourService } from '../../services/hour.service';
import { CreateScheduleInterface } from '../../interfaces/create-schedule.interface';
import { concat, concatMap, mergeMap, scan } from 'rxjs';
import { ServiceService } from '../../../service/services/service.service';
import { DayInterface } from '../../interfaces/day.interface';
import { HourInterface } from '../../interfaces/hour.interface';
import { ScheduleInterface } from '../../interfaces/schedule.interface';

@Component({
  selector: 'app-schedule-modal-form',
  templateUrl: './schedule-modal-form.component.html',
  styleUrls: ['./schedule-modal-form.component.scss'],
})
export class ScheduleModalFormComponent {
  constructor(
    private readonly _dayService: DayService,
    private readonly _hourService: HourService,
    private readonly _serviceService: ServiceService,
    public dialogRef: MatDialogRef<ScheduleFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ScheduleInterface
  ) {}

  createOrEdit(payload: ServiceInterface | CreateScheduleInterface) {
    if (!this.data) {
      payload = payload as CreateScheduleInterface;
      const { servicio } = payload;
      let dia: DayInterface;
      let hora: HourInterface;
      const dayCreate$ = this._dayService.create({
        dia: payload.dia,
        prestacion: servicio,
      });
      dayCreate$
        .pipe(
          mergeMap((day) => {
            dia = day!;
            return this._hourService.create({
              horarioDia: day.id,
              desde: (payload as CreateScheduleInterface).desde,
              hasta: (payload as CreateScheduleInterface).hasta,
            });
          }),
          mergeMap((hour) => {
            hora = hour;
            return this._serviceService.finOneById(servicio);
          })
        )
        .subscribe({
          next: (value) => {
            this.dialogRef.close(this.formatData(dia, hora, value));
          },
          error: (err) => {
            console.log(err);
            this.dialogRef.close();
          },
        });
    } else {
      const { id: idHora, idPrestacion, idDia } = this.data;
      payload = payload as CreateScheduleInterface;
      const dayEdit$ = this._dayService.updateOne(idDia!, {
        dia: payload.dia,
        prestacion: payload.servicio,
      });
      const hourEdit$ = this._hourService.updateOne(idHora!, {
        desde: payload.desde,
        hasta: payload.hasta,
      });
      const serviceEdit$ = this._serviceService.finOneById(idPrestacion!);
      dayEdit$
        .pipe(
          concatMap(() => hourEdit$),
          concatMap(() => serviceEdit$)
        )
        .subscribe({
          next: (value) => {
            this.dialogRef.close(
              this.formatData(
                { ...payload, id: idDia },
                { ...payload, id: idHora },
                value
              )
            );
          },
          error: (err) => {
            console.log(err);
            this.dialogRef.close();
          },
        });
    }
  }

  cancel() {
    console.log('cancel');
    this.dialogRef.close();
  }

  formatData(
    dia: DayInterface,
    hora: HourInterface,
    servicio: ServiceInterface
  ) {
    const { id: idPrestacion } = servicio;
    const { id: idDia } = dia;
    delete dia.id;
    delete hora.horarioDia;
    delete servicio.id;
    const schedule: ScheduleInterface = {
      ...hora,
      ...dia,
      ...servicio,
      idPrestacion,
      idDia,
    };
    return schedule;
  }
}
