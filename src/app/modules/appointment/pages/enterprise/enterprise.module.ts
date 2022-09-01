import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseComponent } from './enterprise.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../material/material.module';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';
import { TableInfoEnterpriseComponent } from './components/table-info-enterprise/table-info-enterprise.component';
import { LocationEnterpriseComponent } from './components/location-enterprise/location-enterprise.component';
import { EnterpriseFormComponent } from './forms/enterprise-form/enterprise-form.component';
import { EnterpriseModalFormComponent } from './modals/enterprise-modal-form/enterprise-modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapModule } from '../../../../map/map.module';

@NgModule({
  declarations: [
    EnterpriseComponent,
    TableInfoEnterpriseComponent,
    LocationEnterpriseComponent,
    EnterpriseFormComponent,
    EnterpriseModalFormComponent,
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    ReactiveFormsModule,
    MapModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
})
export class EnterpriseModule {}
