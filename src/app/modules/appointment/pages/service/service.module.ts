import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../material/material.module';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';
import { ServiceTableComponent } from './components/service-table/service-table.component';
import { ServiceFormComponent } from './forms/service-form/service-form.component';
import { ServiceModalFormComponent } from './modals/service-modal-form/service-modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServiceComponent,
    ServiceTableComponent,
    ServiceFormComponent,
    ServiceModalFormComponent,
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
})
export class ServiceModule {}
