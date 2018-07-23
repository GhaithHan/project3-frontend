import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingSubmission, BuildingService, Building } from '../api/building.service';



@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {

  buildings: Array<Building> = [];
  userForm: BuildingSubmission = new BuildingSubmission();
  
  constructor(
    private myBuildingServ: BuildingService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    
  }

  buildingSubmit() {
    // pass the form inputs to the service
    console.log(this.userForm);
    this.myBuildingServ.postBuilding(this.userForm)
      .then((response: Building) => {
        // redirect to the same page
        this.myRouterServ.navigateByUrl(`/building`);
      })
      .catch((err) => {
        alert("Sorry! There was a problem submitting your property! 😰");
        console.log(err);
      });
  }

}
