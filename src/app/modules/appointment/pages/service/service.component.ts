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
    this._serviceService.findAll().subscribe({
      next: (value) => {
        this.services = value[0];
        console.log(this.services);
      },
      error: (err) => {
        console.log(err);
      },
    });
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
    console.log(service);
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
}
