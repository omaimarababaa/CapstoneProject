import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { LandingComponent } from './pages/enduser/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'admin',loadChildren:()=>import('./pages/admin/admin.module').then((m)=> m.AdminModule)},
  {path:'auth',loadChildren:()=>import('./pages/auth/auth.module').then((m)=> m.AuthModule)},
  {path:'user',component:LandingComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
