import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonComponent } from './components/button/button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuOptionComponent,
    DividerComponent,
    ButtonComponent,
    IconButtonComponent,
    InputComponent,
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimeNgModule,
    NgSelectModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuOptionComponent,
    DividerComponent,
    ButtonComponent,
    IconButtonComponent,
    InputComponent,
    AutocompleteComponent,
  ],
})
export class SharedModule {}
