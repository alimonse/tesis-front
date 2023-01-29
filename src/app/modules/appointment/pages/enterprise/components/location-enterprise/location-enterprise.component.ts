import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-enterprise',
  templateUrl: './location-enterprise.component.html',
  styleUrls: ['./location-enterprise.component.scss'],
})
export class LocationEnterpriseComponent {
  uri = '';
  @Input() lat!: string;
  @Input() lng!: string;

  @Input() set url(value: string) {
    if (value) {
      this.uri = `https://www.google.com/maps/search/${this.lat},+${this.lng}?shorturl=1`;
    }
  }
}
