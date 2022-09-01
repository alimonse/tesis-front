import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: [],
})
export class MenuOptionComponent {
  @Input() name = '';
  @Input() pathImg = '';
  @Output()
  clickAction = new EventEmitter();

  onClick(): void {
    console.log('hs');
    this.clickAction.emit();
  }
}
