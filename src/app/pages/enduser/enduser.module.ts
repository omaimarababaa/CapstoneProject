import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnduserRoutingModule } from './enduser-routing.module';
import { AddstartupComponent } from './addstartup/addstartup.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/lib/components/material/material/material.module';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    AddstartupComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    EnduserRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class EnduserModule { }
