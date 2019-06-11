import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', 
    component: DashboardComponent,    
    children:[         
      {path:"history", component:HistoryComponent, pathMatch:'full' },      
      {path:"downloads", component:DownloadsComponent, pathMatch:'full' },
    ]
  }  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}