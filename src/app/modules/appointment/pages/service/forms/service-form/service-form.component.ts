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
        this.formData?.tiempoAproximado ?? EMPTY_VALUE,
        [FormsUtil.requiredValidator('tiempoAproximado')],
      ],
      tiempoEspera: [
        this.formData?.tiempoEspera ?? EMPTY_VALUE,
        [FormsUtil.requiredValidator('tiempoEspera')],
      ],
    });
  }

  sendForm() {
    if (this.form.valid) {
      // const now = formatDate(new Date(Date.now()), 'yyyy-mm-dd', 'en');
      // this.form.value.tiempoAproximado = `${now}T${this.form.value.tiempoAproximado}`;
      // this.form.value.tiempoEspera = `${now}T${this.form.value.tiempoEspera}`;
      this.onCreateOrUpdate.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
