import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [ 
  {path:'about', component: AboutComponent},
  
  {
     path: '**',component: PnfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
