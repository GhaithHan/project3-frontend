import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ResidentService, Resident, ResidentSubmission } from '../../api/resident.service';


@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})

export class ResidentsComponent implements OnInit {
 userForm: ResidentSubmission = new ResidentSubmission();
 residents: Array<Resident> = [];
 residentItem: Resident;
 appState: string;
 activeKey: string;

  constructor(
    private myResidentServ: ResidentService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.appState = 'default';
    this.fetchResidents();
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

  changeState(state, key = null){
    if(key){
      this.activeKey = key;
    }
    this.appState = state;
  }

  residentSubmit() {
    // pass the form inputs to the service
    this.myResidentServ.postResident(this.userForm)
      .then((response: Resident) => {
        this.fetchResidents();
      })
      .catch((err) => {
        alert("Sorry! There was a problem submitting your residents! 😰");
        console.log(err);
      });
      this.changeState('default');
  }


  // deleteResidentClick() {
  //   const { name } = this.get

  // }

}
