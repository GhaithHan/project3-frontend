import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


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
import { PaymentsComponent } from './building-details/./payments/payments.component';
import { ResidentsComponent } from './building-details/./residents/residents.component';
import { SuggestionsComponent } from './building-details/./suggestions/suggestions.component'


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
    BuildingComponent,
    BuildingDetailsComponent,
    BuildingListComponent,
    PaymentsComponent,
    ResidentsComponent,
    SuggestionsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
