import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TableColumnInterface } from '../../../../../../interfaces/table-column.interface';
import {
  ROWS,
  ROWS_PER_PAGE_OPTION,
} from '../../../../../../constants/constants';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss'],
})
export class ScheduleTableComponent {
  @Input() schedules: any[] = [];

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  cols: TableColumnInterface[] = [
    {
      header: 'Nombre',
      field: 'nombre',
    },
    {
      header: 'URL',
      field: 'url',
    },
    {
      header: 'Horario',
      field: 'horario',
    },
    {
      header: 'Dia',
      field: 'dia',
    },
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
    console.log(rowData);
    this.onEdit.emit(rowData);
  }
}
