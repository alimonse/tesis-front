import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
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
      url: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
    });
  }

  sendForm() {
    console.log(this.form.value);
  }
}
