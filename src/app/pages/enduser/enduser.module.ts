import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnduserRoutingModule } from './enduser-routing.module';
import { AddstartupComponent } from './addstartup/addstartup.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/lib/components/material/material/material.module';
import { InfoComponent } from './info/info.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AddstartupComponent, InfoComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7Q1AqBFk3RJ--62kLfUj09zVUp45QzJE',
    }),

    CommonModule,
    EnduserRoutingModule,
    MaterialModule,
    FormsModule,
  ],
})
export class EnduserModule {}
