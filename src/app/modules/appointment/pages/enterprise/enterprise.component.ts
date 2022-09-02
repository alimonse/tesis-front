import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnterpriseModalFormComponent } from './modals/enterprise-modal-form/enterprise-modal-form.component';
import { EnterpriseService } from './services/enterprise.service';
import { EnterpriseInterface } from './interfaces/enterprise.interface';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent implements OnInit {
  enterprise!: EnterpriseInterface;
  enterpriseInfo: { label: string; value: string }[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly _enterpriseService: EnterpriseService
  ) {}

  ngOnInit(): void {
    this.getEnterprise();
  }

  getEnterprise(): void {
    const empresas$ = this._enterpriseService.findAll();
    empresas$.subscribe({
      next: (value) => {
        if (!value[0].length) {
          console.log('sin data');
        }
        this.enterprise = value[0][0];
        this.setInfoEnterprise(value[0][0]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  edit() {
    const dialogRef = this.dialog.open(EnterpriseModalFormComponent, {
      width: '800px',
      panelClass: 'custom-mat-dialog',
      data: this.enterprise,
    });

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.enterprise = value;
          this.setInfoEnterprise(value);
        }
      },
    });
  }

  private setInfoEnterprise(enterprise: EnterpriseInterface) {
    this.enterpriseInfo = [];
    this.enterpriseInfo.push({
      label: 'Nombre empresa',
      value: enterprise.nombreComercial!,
    });
    this.enterpriseInfo.push({
      label: 'Mensaje saludo',
      value: enterprise.mensajeSaludo!,
    });
    this.enterpriseInfo.push({
      label: 'Información sobre empresa',
      value: enterprise.informacion!,
    });
  }
}
