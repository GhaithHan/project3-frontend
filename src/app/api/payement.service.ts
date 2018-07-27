import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Resident } from './resident.service';

const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class PayementService {
 
  buildingId: string;

  

  constructor(
    private myHttpServ: HttpClient
  ) { }
  
  // GET /api/residents
  getPayementList() {
    const buildingId = this.buildingId;
    return this.myHttpServ
      .get(
        `${backendUrl}/api/payements/${buildingId}`,
        { withCredentials: true } 
      )
      .toPromise();
  }

  // GET /api/resident/:id
  getPayementItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(
        `${backendUrl}/api/payement/${id}`,
        { withCredentials: true } 
      )
      .toPromise();
}

// DELETE /api/resident/:id
deletePayementItem(id) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  return this.myHttpServ
    .delete(
      `${backendUrl}/api/payement/${id}`,
      { withCredentials: true } 
    )
    .toPromise();
}

// POST /api/
postPayement(payementInfo: PayementSubmission) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  const buildingId = this.buildingId;
  return this.myHttpServ
    .post(
      `${backendUrl}/api/payements`,
      { payementInfo, buildingId },
      { withCredentials: true } 
    )
    .toPromise();
}

getBuildingId(buildingId) {
  this.buildingId = buildingId;
}


}

export class Payement {
  _id: string;
  payer: Resident;
  situation: string;
  createdAt: string;
  updatedAt: string;
}

export class PayementSubmission {
  payer: string;
  situation: string;
}