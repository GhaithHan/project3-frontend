import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BuildingComponent } from './building/building.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { PlatformComponent } from './platform/platform.component';
import { ResidentsComponent } from './platform/residents/residents.component';
import { SuggestionsComponent } from './platform/suggestions/suggestions.component';
import { PaymentsComponent } from './platform/payments/payments.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
