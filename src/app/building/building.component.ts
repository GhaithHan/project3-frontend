import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingSubmission, BuildingService, Building } from '../api/building.service';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
   buildings: Array<Building> = [];
   userForm: BuildingSubmission = new BuildingSubmission();

  constructor(
    private myBuildingServ: BuildingService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.fetchBuildings();
  }

  fetchBuildings() {
    this.myBuildingServ.getBuildingList()
      .then((response: Array<Building>) => {
        // connects the DATA from the API to the COMPONENT state
        this.buildings = response;
      })
      .catch((err) => {
        alert("Sorry! We couldn't get our list of buildings.😏 ");
        console.log(err);
    });
  }

}
