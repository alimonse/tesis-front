import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnterpriseModalFormComponent } from './modals/enterprise-modal-form/enterprise-modal-form.component';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent {
  enterpriseInfo = [
    {
      label: 'Nombre empresa',
      value: 'Manticore-labs',
    },
    {
      label: 'Mensaje saludo',
      value:
        'Manticore labs, es una empresa que desarrolla software a la medida. realizamos diversos servicios, entre ellos: Modelamiento de requisistos, ',
    },
    {
      label: 'Información sobre empresa',
      value:
        'Manticore labs, es una empresa que desarrolla software a la medida. realizamos diversos servicios, entre ellos: Modelamiento de requisistos, ',
    },
  ];

  constructor(public dialog: MatDialog) {}

  edit() {
    console.log('event');
    const dialogRef = this.dialog.open(EnterpriseModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        console.log('modal');
      },
    });
  }
}
