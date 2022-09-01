import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScheduleFormComponent } from '../../forms/schedule-form/schedule-form.component';

@Component({
  selector: 'app-schedule-modal-form',
  templateUrl: './schedule-modal-form.component.html',
  styleUrls: ['./schedule-modal-form.component.scss'],
})
export class ScheduleModalFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ScheduleFormComponent>,
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
