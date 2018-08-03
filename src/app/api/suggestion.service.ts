import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Resident } from './resident.service';

const { backendUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  buildingId: string;

  constructor(
    private myHttpServ: HttpClient
  ) { }

  // GET /api/suggestions
  getSuggestionList() {
    const buildingId = this.buildingId;
    return this.myHttpServ
      .get(
        `${backendUrl}/api/suggestions/${buildingId}`,
        { withCredentials: true } 
      )
      .toPromise();
  }

  // GET /api/suggestion/:id
  getSuggestionItem(id) {
    // return the Promise of the request (component will ".then()" & ".catch()")
    return this.myHttpServ
      .get(
        `${backendUrl}/api/suggestion/${id}`,
        { withCredentials: true } 
      )
      .toPromise();
}

// DELETE /api/suggestion/:id
deleteSuggestionItem(id) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  return this.myHttpServ
    .delete(
      `${backendUrl}/api/suggestion/${id}`,
      { withCredentials: true } 
    )
    .toPromise();
}

// POST /api/suggestions
postSuggestion(suggestionInfo: SuggestionSubmission) {
  // return the Promise of the request (component will ".then()" & ".catch()")
  const buildingId = this.buildingId;
  return this.myHttpServ
    .post(
      `${backendUrl}/api/suggestions`,
      { suggestionInfo, buildingId },
      { withCredentials: true } 
    )
    .toPromise();
}

getBuildingId(buildingId) {
  this.buildingId = buildingId;
}

}


export class Suggestion {
  _id: string;
  description: string;
  complainant: Resident;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export class SuggestionSubmission {
  description: string;
  category: string;
  complainant: string;
}