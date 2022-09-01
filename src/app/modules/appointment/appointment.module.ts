import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    BreadcrumbModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
})
export class AppointmentModule {}
