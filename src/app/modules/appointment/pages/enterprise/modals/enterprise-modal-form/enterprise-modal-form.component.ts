import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnterpriseFormComponent } from '../../forms/enterprise-form/enterprise-form.component';
import { EnterpriseInterface } from '../../interfaces/enterprise.interface';
import { EnterpriseService } from '../../services/enterprise.service';

@Component({
  selector: 'app-enterprise-modal-form',
  templateUrl: './enterprise-modal-form.component.html',
  styleUrls: ['./enterprise-modal-form.component.scss'],
})
export class EnterpriseModalFormComponent {
  // enterprise: EnterpriseInterface | undefined;
  constructor(
    public dialogRef: MatDialogRef<EnterpriseFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: EnterpriseInterface,
    private readonly _enterpriseService: EnterpriseService
  ) {}

  edit(event: EnterpriseInterface) {
    const { id } = this.data;
    const paylaod: EnterpriseInterface = {
      ...event,
      lng: +event.lng!,
      lat: +event.lat!,
    };
    delete paylaod.id;
    delete paylaod.ubicacion;
    this._enterpriseService.updateOne(id!, paylaod).subscribe({
      next: (value) => {
        console.log(value);
        this.dialogRef.close({ ...this.data, ...value });
      },
      error: (err) => {
        console.log(err);
        this.dialogRef.close({ ...this.data });
      },
    });
  }

  cancel() {
    console.log('cancel');
    this.dialogRef.close();
  }
}
