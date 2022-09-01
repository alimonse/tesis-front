import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface AutocompleteInterface {
  value: number | string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteEventInterface {
  term: string;
  items: AutocompleteInterface[];
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnChanges {
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
  isMultiple = false;
  @Input()
  hiddeLoading = false;
  @Input()
  opciones: AutocompleteInterface[] = [];

  @Output()
  blurEvent: EventEmitter<boolean> = new EventEmitter();
  @Output()
  searchEvent: EventEmitter<AutocompleteEventInterface> = new EventEmitter();

  @Output()
  changeEvent: EventEmitter<AutocompleteEventInterface> = new EventEmitter();

  objectError = Object;
  control!: FormControl;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formGroup']?.currentValue) {
      this.control = this.formGroup.get(this.id) as FormControl;
    }
  }

  blur(): void {
    this.blurEvent.emit(true);
  }

  onSearch(event: AutocompleteEventInterface): void {
    this.searchEvent.emit(event);
  }

  onChange(event: AutocompleteEventInterface): void {
    this.changeEvent.emit(event);
  }
}
