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
import { AgmCoreModule } from '@agm/core';
import { DeletesectoreComponent } from './sectors/deletesectore/deletesectore.component';

@NgModule({
  declarations: [AdminComponent, AddComponent, DeletestartupsComponent, EditstartupsComponent, RequstAdminComponent, AddsectorComponent, DeletesectoreComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7Q1AqBFk3RJ--62kLfUj09zVUp45QzJE'
    }),
  ]
})
export class AdminModule {

}