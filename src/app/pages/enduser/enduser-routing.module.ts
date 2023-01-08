import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstartupComponent } from './addstartup/addstartup.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path:'addstartup',component:AddstartupComponent},
  { path:'info/:id',component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnduserRoutingModule { }
