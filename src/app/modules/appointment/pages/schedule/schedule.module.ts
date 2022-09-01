import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../material/material.module';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { ScheduleFormComponent } from './forms/schedule-form/schedule-form.component';
import { ScheduleModalFormComponent } from './modals/schedule-modal-form/schedule-modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleTableComponent,
    ScheduleFormComponent,
    ScheduleModalFormComponent,
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [ScheduleFormComponent],
})
export class ScheduleModule {}
