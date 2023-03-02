import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
