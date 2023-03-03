import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
