import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public buttonText = '';

  @Input()
  isDisabled = false;
  @Input()
  isFormButton = false;
  @Input()
  icon?: string;
  @Input()
  isMaterialIcon = false;

  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }
  get name(): string {
    return this.buttonText;
  }

  @Output()
  clickAction = new EventEmitter();

  onClick(): void {
    this.clickAction.emit();
  }
}
