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
          FormsUtil.requiredValidator('nombreComercial'),
          FormsUtil.minLengthValidator('nombreComercial', 3),
        ],
      ],
      mensajeSaludo: [
        this.formData.mensajeSaludo ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('nombreComercial'),
          FormsUtil.minLengthValidator('mensajeSaludo', 3),
        ],
      ],
      informacion: [
        this.formData.informacion ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('nombreComercial'),
          FormsUtil.minLengthValidator('informacion', 3),
        ],
      ],
      ubicacion: [
        '',
        [
          FormsUtil.requiredValidator('nombreComercial'),
          FormsUtil.minLengthValidator('ubicacion', 3),
        ],
      ],
      lat: [
        this.formData.lat ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('nombreComercial'),
          FormsUtil.numberStringValidator,
        ],
      ],
      lng: [
        this.formData.lng ?? EMPTY_VALUE,
        [
          FormsUtil.requiredValidator('nombreComercial'),
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
