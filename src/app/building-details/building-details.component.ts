import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { BuildingService, Building } from '../api/building.service';
import { ResidentService } from '../api/resident.service';
import { SuggestionService } from '../api/suggestion.service';
import { PayementService } from '../api/payement.service';

@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.css']
})

export class BuildingDetailsComponent implements OnInit {

  id: string;
  buildingItem: Building;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myBuildingServ: BuildingService,
    private myRouterServ: Router,
    private myResident: ResidentService,
    private myPayement: PayementService,
    private mySuggestion: SuggestionService
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        // "buildingId" comes from the route's PATH
        // { path: "building/:buildingId", ... }
        this.id = myParams.get("buildingId");
        this.myResident.getBuildingId(this.id);
        this.mySuggestion.getBuildingId(this.id);
        this.myPayement.getBuildingId(this.id);
        this.fetchBuildingDetails();
    });
  }

  fetchBuildingDetails() {
    this.myBuildingServ.getBuildingItem(this.id)
      .then((response: Building) => {
        // connects the DATA from the API to the COMPONENT state
        this.buildingItem = response;
      })
      .catch((err) => {
        alert("Sorry! There was a problem getting the Building's details. 😅");
        console.log(err);
      });
  }

  deleteBuildingClick() {
    const { adress } = this.buildingItem;
    const isOkay = confirm(`Delete building ${adress}?`);

    if (isOkay) {
      this.myBuildingServ.deleteBuildingItem(this.id)
        .then(() => {
          // redirect away to the list page
          this.myRouterServ.navigateByUrl("/building");
        })                
        .catch((err) => {
          alert("Sorry! There was a problem deleting the building. 😨");
          console.log(err);
        });
    }
}

}
