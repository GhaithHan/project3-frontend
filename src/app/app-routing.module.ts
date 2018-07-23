import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BuildingComponent } from './building/building.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BuildingDetailsComponent } from './building-details/building-details.component';
import { BuildingListComponent } from './building-list/building-list.component';



const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "building", component: BuildingComponent },
  { path: "building/addbuilding", component: BuildingListComponent },
  { path: "building/:buildingId", component: BuildingDetailsComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
