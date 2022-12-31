import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnduserRoutingModule } from './enduser-routing.module';
import { AddstartupComponent } from './addstartup/addstartup.component';



@NgModule({
  declarations: [
    AddstartupComponent
  ],
  imports: [
    CommonModule,
    EnduserRoutingModule
  ]
})
export class EnduserModule { }
