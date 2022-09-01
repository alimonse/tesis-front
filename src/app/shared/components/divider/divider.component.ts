import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: [],
})
export class DividerComponent {
  @Input() text = '';
  @Input() icon = '';
}
