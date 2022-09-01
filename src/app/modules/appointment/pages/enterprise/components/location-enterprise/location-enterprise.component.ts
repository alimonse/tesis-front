import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-enterprise',
  templateUrl: './location-enterprise.component.html',
  styleUrls: ['./location-enterprise.component.scss'],
})
export class LocationEnterpriseComponent {
  @Input() url = '';
  @Input() lat = '';
  @Input() long = '';
}
