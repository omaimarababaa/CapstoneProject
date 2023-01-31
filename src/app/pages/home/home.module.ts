import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AgmCoreModule } from '@agm/core';
import { PnfComponent } from './pnf/pnf.component';
import { FaqComponent } from './faq/faq.component';
@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    PnfComponent,
    FaqComponent,
     
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7Q1AqBFk3RJ--62kLfUj09zVUp45QzJE'
    }),
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ShareButtonsModule,
    ShareIconsModule
  ]
})
export class HomeModule { }
