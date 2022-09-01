import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceFormComponent } from '../../forms/service-form/service-form.component';

@Component({
  selector: 'app-service-modal-form',
  templateUrl: './service-modal-form.component.html',
  styleUrls: ['./service-modal-form.component.scss'],
})
export class ServiceModalFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ServiceFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      // !tipar
      data: any;
    }
  ) {}

  edit() {
    console.log('edit');
    this.dialogRef.close();
  }

  cancel() {
    console.log('cancel');
    this.dialogRef.close();
  }
}
