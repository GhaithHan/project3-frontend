import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(
    private myHttpServ: HttpClient
  ) { }
  
  // GET /api/residents
  getResidentList() {
    return this.myHttpServ
      .get(
        `${backendUrl}/api/residents`,
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

// POST /api/
postResident(residentInfo: ResidentSubmission) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  return this.myHttpServ
    .post(
      `${backendUrl}/api/residents`,
      residentInfo,
      { withCredentials: true } // send cookies across domains
    )
    .toPromise();
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
