import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-info-enterprise',
  templateUrl: './table-info-enterprise.component.html',
  styleUrls: ['./table-info-enterprise.component.scss'],
})
export class TableInfoEnterpriseComponent {
  //! tipar
  @Input() enterpriseInfo: any[] = [];
}
