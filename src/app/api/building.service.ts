import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const backendUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(
    private myHttpServ: HttpClient
  ) { }


  // GET /api/buildings
  getBuildingList() {
    return this.myHttpServ
      .get(
        `${backendUrl}/api/buildings`,
        { withCredentials: true } // send cookies across domains
      )
      .toPromise();
  }

  // GET /api/building/:id
  getBuildingItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(
        `${backendUrl}/api/building/${id}`,
        { withCredentials: true } 
      )
      .toPromise();
}

// DELETE /api/building/:id
deleteBuildingItem(id) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  return this.myHttpServ
    .delete(
      `${backendUrl}/api/building/${id}`,
      { withCredentials: true } 
    )
    .toPromise();
}

// POST /api/
postBuilding(buildingInfo: BuildingSubmission) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  return this.myHttpServ
    .post(
      `${backendUrl}/api/buildings`,
      buildingInfo,
      { withCredentials: true } // send cookies across domains
    )
    .toPromise();
}


}

export class Building {
  _id: string;
  adress: string;
  promoter: string;
  dateOfoperation: string;
  budgetDisposed: number;
  dueDate: Date;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export class BuildingSubmission {
  adress: string;
  promoter: string;
  dateOfoperation: string;
  budgetDisposed: number;
  dueDate: Date;
  image: string;
}
