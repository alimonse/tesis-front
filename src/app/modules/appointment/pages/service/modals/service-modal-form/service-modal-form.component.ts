import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceFormComponent } from '../../forms/service-form/service-form.component';
import { ServiceInterface } from '../../interfaces/service.interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service-modal-form',
  templateUrl: './service-modal-form.component.html',
  styleUrls: ['./service-modal-form.component.scss'],
})
export class ServiceModalFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ServiceFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ServiceInterface,
    private readonly _serviceService: ServiceService
  ) {}

  createOrEdit(payload: ServiceInterface) {
    if (!this.data) {
      //! quemados para una sola empresa
      payload.colaborador = 1;
      payload.oficina = 1;
      //! ------------------------------
      this._serviceService.create(payload).subscribe({
        next: (value) => {
          this.dialogRef.close(value);
        },
        error: (err) => {
          console.log(err);
          this.dialogRef.close();
        },
      });
    } else {
      const { id } = this.data;
      this._serviceService.updateOne(id!, payload).subscribe({
        next: (value) => {
          this.dialogRef.close(value);
        },
        error: (err) => {
          console.log(err);
          this.dialogRef.close();
        },
      });
    }
  }

  cancel() {
    console.log('cancel');
    this.dialogRef.close();
  }
}
