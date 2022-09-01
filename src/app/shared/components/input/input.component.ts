import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

type InputType =
  | 'text'
  | 'number'
  | 'password'
  | 'email'
  | 'date'
  | 'time'
  | 'datetime-local';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @Input()
  type: InputType = 'text';
  @Input()
  id = '';
  @Input()
  label = '';
  @Input()
  placeholder = '';
  @Input()
  formGroup!: FormGroup;
  @Input()
  appAutoFocus = false;
  @Input()
  errorMessage = '';
  @Input()
  required = false;
  @Input()
  readonly = false;
  @Input()
  isTextarea = false;
  @Input()
  textareaRows = 3;

  @Output()
  blurEvent: EventEmitter<boolean> = new EventEmitter();

  objectError = Object;
  control!: FormControl;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formGroup']) {
      this.control = this.formGroup.get(this.id) as FormControl;
      console.log(this.control);
    }
  }

  blur(): void {
    this.blurEvent.emit(true);
  }
}
