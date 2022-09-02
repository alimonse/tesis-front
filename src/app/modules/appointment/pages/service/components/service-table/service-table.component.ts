import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TableColumnInterface } from '../../../../../../interfaces/table-column.interface';
import {
  ROWS,
  ROWS_PER_PAGE_OPTION,
} from '../../../../../../constants/constants';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.scss'],
})
export class ServiceTableComponent {
  @Input() services: any[] = [];
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  cols: TableColumnInterface[] = [
    {
      header: 'Nombre',
      field: 'nombreServicio',
    },
    {
      header: 'Descripción',
      field: 'descripcion',
    },
    {
      header: 'Tiempo',
      field: 'tiempoAproximado',
    },
    // {
    //   header: 'Tiempo',
    //   field: 'tiempoEspera',
    // },
    {
      header: 'Acciones',
      field: 'id',
    },
  ];
  rows = ROWS;
  rowsPerPageOptions = ROWS_PER_PAGE_OPTION;
  totalRecords = 10;

  cargarRegistros(event: any) {
    console.log(event);
  }

  edit(rowData: any) {
    this.onEdit.emit(rowData);
  }

  goToSchedule(rowData: any) {
    console.log(rowData);
  }
}
