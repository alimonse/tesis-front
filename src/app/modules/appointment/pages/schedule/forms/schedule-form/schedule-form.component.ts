import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormsUtil } from '../../../../../../utils/forms.util';
import { AutocompleteInterface } from '../../../../../../shared/components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  @Input() formData: any;
  @Output() eventoFormulario: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;
  suscripciones: Subscription[] = [];
  opcionesServicios: AutocompleteInterface[] = [];

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    console.log('buildForm');
    this.form = this._formBuilder.group({
      servicio: ['', []],
      dia: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      desde: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
      hasta: ['', [FormsUtil.minLengthValidator('nombre', 3)]],
    });
  }

  sendForm() {
    console.log(this.form.value);
  }
}
