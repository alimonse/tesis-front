import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnterpriseFormComponent } from '../../forms/enterprise-form/enterprise-form.component';

@Component({
  selector: 'app-enterprise-modal-form',
  templateUrl: './enterprise-modal-form.component.html',
  styleUrls: ['./enterprise-modal-form.component.scss'],
})
export class EnterpriseModalFormComponent {
  constructor(
    public dialogRef: MatDialogRef<EnterpriseFormComponent>,
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
