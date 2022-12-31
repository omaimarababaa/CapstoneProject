import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstartupComponent } from './pages/enduser/addstartup/addstartup.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  
  {path:'admin',loadChildren:()=>import('./pages/admin/admin.module').then((m)=> m.AdminModule)},

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
