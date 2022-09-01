import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';

@Component({
  selector: 'app-enterprise-form',
  templateUrl: './enterprise-form.component.html',
  styleUrls: ['./enterprise-form.component.scss'],
})
export class EnterpriseFormComponent implements OnInit {
  @Input() formData: any;
  @Output() eventoFormulario: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;
  suscripciones: Subscription[] = [];

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    console.log('buildForm');
    this.form = this._formBuilder.group({
      nombre: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      saludo: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      informacion: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      ubicacion: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      lat: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      lng: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
    });
  }

  sendForm() {
    console.log(this.form.value);
  }
}
