import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalFormComponent } from './modals/service-modal-form/service-modal-form.component';
import { ServiceService } from './services/service.service';
import { ServiceInterface } from './interfaces/service.interface';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  services: ServiceInterface[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly _serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.getEnterprises();
  }

  create() {
    const dialogRef = this.dialog.open(ServiceModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
    });

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.services.unshift(value);
        }
      },
    });
  }

  edit(service: ServiceInterface) {
    const dialogRef = this.dialog.open(ServiceModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
      data: service,
    });

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          const idItem = this.services.findIndex(
            (item) => item.id === service.id
          );
          this.services[idItem] = value;
        }
      },
    });
  }

  getEnterprises() {
    const query = {
      where: {},
      order: {
        id: 'ASC',
      },
    };
    this._serviceService
      .findAll(`busqueda=${JSON.stringify(query)}`)
      .subscribe({
        next: (value) => {
          this.services = value[0];
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
