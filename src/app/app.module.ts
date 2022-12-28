import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './lib/components/material/material/material.module';
import { LayoutComponent } from './lib/components/layouts/layout/layout.component';
import { HeaderComponent } from './lib/components/header/header.component';
import { FooterComponent } from './lib/components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { enviroment } from 'src/enviroments/enviroment';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './pages/auth/auth.module';
import { LandingComponent } from './pages/enduser/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireAuthModule,
    FormsModule,
    AuthModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
