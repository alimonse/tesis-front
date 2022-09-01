import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from '../../../../material/material.module';
import { PrimeNgModule } from '../../../../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
})
export class MenuModule {}
