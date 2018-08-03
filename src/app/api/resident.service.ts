import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  buildingId: string;

  constructor(
    private myHttpServ: HttpClient
  ) { }
  
  // GET /api/residents
  getResidentList() {
    const buildingId = this.buildingId;
    return this.myHttpServ
      .get(
        `${backendUrl}/api/residents/${buildingId}`,
        { withCredentials: true } 
      )
      .toPromise();
  }

  // GET /api/resident/:id
  getResidentItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(
        `${backendUrl}/api/resident/${id}`,
        { withCredentials: true } 
      )
      .toPromise();
}

// DELETE /api/resident/:id
deleteResidentItem(id) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  return this.myHttpServ
    .delete(
      `${backendUrl}/api/resident/${id}`,
      { withCredentials: true } 
    )
    .toPromise();
}

// POST /api/residents
postResident(residentInfo: ResidentSubmission) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  const buildingId = this.buildingId;
  return this.myHttpServ
    .post(
      `${backendUrl}/api/residents`,
      { residentInfo, buildingId },
      { withCredentials: true } // send cookies across domains
    )
    .toPromise();
}

getBuildingId(buildingId) {
  this.buildingId = buildingId;
}

}

export class Resident {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export class ResidentSubmission {
  firstName: string;
  lastName: string;
  email: string;
}
