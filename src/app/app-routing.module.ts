import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/downloads/downloads.component';
import { HistoryModule } from './pages/history/history.module';
import { ValidateModule } from './pages/validate/validate.module';



const routes: Routes = [
  { path: '', 
  component: DashboardComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent, data: { state: 'dashboard' } 
  },
  {  
    path: 'validate', 
    loadChildren: () => import('./pages/validate/validate.module').then(m => m.ValidateModule), data: { state: 'validate' }
  },
  { 
    path: 'history', 
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule), data: { state: 'history' }
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    RouterModule, 
    HistoryModule, 
    ValidateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
