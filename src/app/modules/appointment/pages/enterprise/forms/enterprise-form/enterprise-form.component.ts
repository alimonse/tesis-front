import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';
import { EnterpriseInterface } from '../../interfaces/enterprise.interface';
import { EMPTY_VALUE } from '../../../../../../constants/constants';

@Component({
  selector: 'app-enterprise-form',
  templateUrl: './enterprise-form.component.html',
  styleUrls: ['./enterprise-form.component.scss'],
})
export class EnterpriseFormComponent implements OnInit {
  @Input() formData!: EnterpriseInterface;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onUpdate: EventEmitter<EnterpriseInterface> = new EventEmitter();
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
      nombreComercial: [
        this.formData.nombreComercial ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('Nombre comercial'),
          FormsUtil.minLengthValidator('Nombre comercial', 3),
        ],
      ],
      mensajeSaludo: [
        this.formData.mensajeSaludo ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('Saludo'),
          FormsUtil.minLengthValidator('Saludo', 3),
        ],
      ],
      informacion: [
        this.formData.informacion ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('Información'),
          FormsUtil.minLengthValidator('Información', 3),
        ],
      ],
      ubicacion: [
        this.formData.lat && this.formData.lng ?  `https://www.google.com/maps/search/${this.formData.lat},+${this.formData.lng}?shorturl=1` : EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('ubicacion'),
          FormsUtil.minLengthValidator('ubicacion', 3),
        ],
      ],
      lat: [
        this.formData.lat ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('Latitud'),
          FormsUtil.numberStringValidator,
        ],
      ],
      lng: [
        this.formData.lng ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('Longitud'),
          FormsUtil.numberStringValidator,
        ],
      ],
    });
  }

  sendForm() {
    if (this.form.valid) {
      this.onUpdate.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.onCancel.emit();
  }
}
