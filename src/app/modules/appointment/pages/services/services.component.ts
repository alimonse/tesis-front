import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalFormComponent } from './modals/service-modal-form/service-modal-form.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 1,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 2,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
    {
      id: 3,
      nombre: 'Desarrollo',
      url: 'Desarrollo',
    },
  ];

  constructor(public dialog: MatDialog) {}

  create() {
    const dialogRef = this.dialog.open(ServiceModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        console.log('modal');
      },
    });
  }

  edit(service: any) {
    console.log(service);
    const dialogRef = this.dialog.open(ServiceModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
      data: {},
    });

    dialogRef.afterClosed().subscribe({
      next: () => {
        console.log('modal');
      },
    });
  }
}
