import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import {TableModule} from 'primeng/table';
import { HistoryModule } from './pages/history/history.module';
import { UploadModule } from './pages/upload/upload.module';
import { ValidateModule } from './pages/validate/validate.module';



const routes: Routes = [
  
  { 
    path: 'download', 
    component: DownloadsComponent, data: { state: 'dashboard' } 
  },
  {  
    path: 'validate', 
    loadChildren: () => import('./pages/validate/validate.module').then(m => m.ValidateModule), data: { state: 'validate' }
  },
  { 
    path: 'history', 
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule), data: { state: 'history' }
  },
  
  { path: 'upload',
   loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule), data: { state: 'history' }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    RouterModule, 
    HistoryModule,
    UploadModule, 
    ValidateModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
