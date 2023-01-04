import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RequstAdminComponent } from './requst-admin/requst-admin.component';


const routes: Routes = [
  {path:'', component:AdminComponent},
  {path:'request', component:RequstAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
