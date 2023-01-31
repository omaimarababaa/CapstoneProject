import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
