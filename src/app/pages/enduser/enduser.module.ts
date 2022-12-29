import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnduserRoutingModule } from './enduser-routing.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    EnduserRoutingModule
  ]
})
export class EnduserModule { }
