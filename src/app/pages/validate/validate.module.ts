import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateComponent } from './validate.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
   ValidateComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ValidateRoutingModule
  ]
})
export class ValidateModule { }
