import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';
import { AutocompleteInterface } from '../../../../../../shared/components/autocomplete/autocomplete.component';
import { ServiceService } from '../../../service/services/service.service';
import { ServiceInterface } from '../../../service/interfaces/service.interface';
import { formatDate } from '@angular/common';
import { ScheduleInterface } from '../../interfaces/schedule.interface';
import { EMPTY_VALUE } from '../../../../../../constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  @Input() formData: ScheduleInterface | undefined;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCreateOrUpdate: EventEmitter<ServiceInterface> =
    new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCancel: EventEmitter<undefined> = new EventEmitter();
  form!: FormGroup;
  suscripciones: Subscription[] = [];
  opcionesServicios: AutocompleteInterface[] = [];

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.getServices();
    this.buildForm();
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      servicio: [
        this.formData?.idPrestacion ?? EMPTY_VALUE,
        [FormsUtil.requiredValidator('servicio')],
      ],
      dia: [
        this.formData?.dia ?? EMPTY_VALUE,
        [FormsUtil.requiredValidator('dia')],
      ],
      desde: [
        this.formData?.desde ?? EMPTY_VALUE,
        [FormsUtil.requiredValidator('desde')],
      ],
      hasta: [
        this.formData?.hasta ?? EMPTY_VALUE,
        [FormsUtil.requiredValidator('hasta')],
      ],
    });
  }

  sendForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      const { desde, hasta } = this.form.value;
      const [desdeHour, desdeMin] = desde.split(':');
      const from = new Date(
        new Date(new Date(Date.now()).setHours(desdeHour)).setMinutes(desdeMin)
      );
      const [hastaHour, hastaMin] = hasta.split(':');
      const until = new Date(
        new Date(new Date(Date.now()).setHours(hastaHour)).setMinutes(hastaMin)
      );
      console.log(from, until);
      if (from.getTime() <= until.getTime()) {
        this.onCreateOrUpdate.emit(this.form.value);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Hora de servicio!',
          text: 'La hora hasta debe ser mayor a la hora desde',
        });
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.onCancel.emit();
  }

  getServices() {
    const query = {
      where: {},
      order: {
        id: 'ASC',
      },
    };
    const services$ = this._serviceService.findAll(
      `busqueda=${JSON.stringify(query)}`
    );
    services$.subscribe({
      next: (value) => {
        if (!value[0].length) {
          console.log('sin data');
        }
        this.opcionesServicios = value[0].map((item) => ({
          label: item.nombreServicio!,
          value: item.id!,
        }));
      },
    });
  }
}
