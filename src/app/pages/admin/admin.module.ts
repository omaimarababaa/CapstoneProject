import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from 'src/app/lib/components/material/material/material.module';
import { AddComponent } from './startups/add/add.component';
import { FormsModule } from '@angular/forms';
import { DeletestartupsComponent } from './startups/deletestartups/deletestartups.component';
import { EditstartupsComponent } from './startups/editstartups/editstartups.component';
import { RequstAdminComponent } from './requst-admin/requst-admin.component';
import { AddsectorComponent } from './sectors/addsector/addsector.component';







@NgModule({
  declarations: [AdminComponent, AddComponent, DeletestartupsComponent, EditstartupsComponent, RequstAdminComponent, AddsectorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule {

}