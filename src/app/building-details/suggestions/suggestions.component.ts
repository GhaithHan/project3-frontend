import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService, Suggestion, SuggestionSubmission } from '../../api/suggestion.service';
import { ResidentService, Resident } from '../../api/resident.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  userForm: SuggestionSubmission = new SuggestionSubmission();
  suggestions: Array<Suggestion> = [];
  suggestionItem: Suggestion;
  residents: Array<Resident> = [];
  appState: string;
  activeKey: string;

  constructor(
    private mySuggestionServ: SuggestionService,
    private myRouterServ: Router,
    private myResidentServ: ResidentService
  ) { }

  ngOnInit() {
    this.appState = 'default';
    this.fetchSuggestions();
    this.fetchResidents();
  }

  changeState(state, key = null){
    if(key){
      this.activeKey = key;
    }
    this.appState = state;
  }

  fetchSuggestions() {
    this.mySuggestionServ.getSuggestionList()
    .then((response: Array<Suggestion>) => {
      this.suggestions = response;
      console.log(this.suggestions);
    })
    .catch((err) => {
      alert("Sorry! We couldn't get our list of suggestions. 😕");
      console.log(err);
    });
  }

  suggestionSubmit() {
    console.log(this.userForm);
    this.mySuggestionServ.postSuggestion(this.userForm)
      .then((response: Suggestion) => {
        this.fetchSuggestions();
      })
      .catch((err) => {
        alert("Sorry! There was a problem submitting your residents! 😰");
        console.log(err);
      });
      this.changeState('default');
  }

  fetchResidents() {
    this.myResidentServ.getResidentList()
     .then((response: Array<Resident>) => {
      this.residents = response;
      console.log(this.residents);
     })
     .catch((err) => {
      alert("Sorry! We couldn't get our list of residents. 😕");
      console.log(err);
     });
  }

  deleteResident(id) {
    
  }

  fetchBuildingId( id ) {
    this.mySuggestionServ.getBuildingId(id);
  }

}
