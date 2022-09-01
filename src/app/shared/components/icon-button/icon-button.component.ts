import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonType =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'DANGER'
  | 'INFO'
  | 'LIGHT'
  | 'SUCCESS'
  | 'PRIMARY-OUTLINE';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input()
  buttonType: ButtonType = 'PRIMARY';
  @Input()
  isDisabled = false;
  @Input()
  icon = '';
  @Input()
  isMaterialIcon = false;
  @Input()
  title = '';
  @Output()
  clickAction = new EventEmitter();

  onClick(): void {
    this.clickAction.emit();
  }
}
