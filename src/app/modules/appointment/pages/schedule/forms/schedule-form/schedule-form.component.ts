import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';
import { AutocompleteInterface } from '../../../../../../shared/components/autocomplete/autocomplete.component';
import { ServiceService } from '../../../service/services/service.service';
import { ServiceInterface } from '../../../service/interfaces/service.interface';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  @Input() formData: any;
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
      servicio: ['', [FormsUtil.requiredValidator('servicio')]],
      dia: [
        '',
        [
          FormsUtil.minLengthValidator('nombre', 3),
          FormsUtil.requiredValidator('dia'),
        ],
      ],
      desde: [
        '',
        [
          FormsUtil.minLengthValidator('nombre', 3),
          FormsUtil.requiredValidator('desde'),
        ],
      ],
      hasta: [
        '',
        [
          FormsUtil.minLengthValidator('nombre', 3),
          FormsUtil.requiredValidator('hasta'),
        ],
      ],
    });
  }

  sendForm() {
    if (this.form.valid) {
      console.log(this.form.value.dia);
      // formatDate(this.form.value.dia)
      this.onCreateOrUpdate.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.onCancel.emit();
  }

  getServices() {
    const services$ = this._serviceService.findAll();
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
