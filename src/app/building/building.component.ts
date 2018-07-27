import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingSubmission, BuildingService, Building } from '../api/building.service';
import { ResidentService } from '../api/resident.service';
import { SuggestionService } from '../api/suggestion.service';
import { PayementService } from '../api/payement.service';




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
    private myRouterServ: Router,
    private myResidentServ: ResidentService,
    private mySuggestionServ: SuggestionService,
    private myPayementServ: PayementService
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

  fetchBuildingId( id ) {
    this.myResidentServ.getBuildingId(id);
    this.mySuggestionServ.getBuildingId(id); 
    this.myPayementServ.getBuildingId(id); 
  }

}
