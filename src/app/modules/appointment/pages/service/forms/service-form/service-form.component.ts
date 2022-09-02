import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';
import { ServiceInterface } from '../../interfaces/service.interface';
import { EMPTY_VALUE } from '../../../../../../constants/constants';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
  @Input() formData: ServiceInterface | undefined;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCreateOrUpdate: EventEmitter<ServiceInterface> =
    new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCancel: EventEmitter<undefined> = new EventEmitter();
  form!: FormGroup;
  suscripciones: Subscription[] = [];

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      nombreServicio: [
        this.formData?.nombreServicio ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('nombreServicio'),
          FormsUtil.minLengthValidator('nombreServicio', 3),
        ],
      ],
      descripcion: [
        this.formData?.descripcion ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('descripcion'),
          FormsUtil.minLengthValidator('descripcion', 3),
        ],
      ],
      tiempoAproximado: [
        this.formData?.tiempoAproximado
          ? formatDate(
              new Date(this.formData?.tiempoAproximado),
              'yyyy-MM-ddThh:mm',
              'en'
            )
          : EMPTY_VALUE,
        [FormsUtil.requiredValidator('tiempoAproximado')],
      ],
      tiempoEspera: [
        this.formData?.tiempoEspera
          ? formatDate(
              new Date(this.formData?.tiempoEspera),
              'yyyy-MM-ddThh:mm',
              'en'
            )
          : EMPTY_VALUE,
        [FormsUtil.requiredValidator('tiempoEspera')],
      ],
    });
  }

  sendForm() {
    if (this.form.valid) {
      this.onCreateOrUpdate.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
