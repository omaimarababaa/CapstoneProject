import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from 'src/app/lib/components/material/material/material.module';
import { AddComponent } from './add/add.component';





@NgModule({
  declarations: [AdminComponent, AddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule {

}