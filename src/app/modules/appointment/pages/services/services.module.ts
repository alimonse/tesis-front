import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../material/material.module';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';
import { ServiceTableComponent } from './components/service-table/service-table.component';
import { ServiceFormComponent } from './forms/service-form/service-form.component';
import { ServiceModalFormComponent } from './modals/service-modal-form/service-modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServicesComponent,
    ServiceTableComponent,
    ServiceFormComponent,
    ServiceModalFormComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
})
export class ServicesModule {}
