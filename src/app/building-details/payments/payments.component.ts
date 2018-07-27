import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayementService, Payement, PayementSubmission } from '../../api/payement.service';
import { ResidentService, Resident } from '../../api/resident.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  userForm: PayementSubmission = new PayementSubmission();
  payements: Array<Payement> = [];
  payementItem: Payement;
  residents: Array<Resident> = [];
  appState: string;
  activeKey: string;

  constructor(
    private myPayementServ: PayementService,
    private myRouterServ: Router,
    private myResidentServ: ResidentService
  ) { }

  ngOnInit() {
    this.appState = 'default';
    this.fetchPayements();
    this.fetchResidents();
  }

  changeState(state, key = null){
    if(key){
      this.activeKey = key;
    }
    this.appState = state;
  }

  fetchPayements() {
    this.myPayementServ.getPayementList()
    .then((response: Array<Payement>) => {
      this.payements = response;
      console.log(this.payements);
    })
    .catch((err) => {
      alert("Sorry! We couldn't get our list of payements. 😕");
      console.log(err);
    });
  }

  payementSubmit() {
    console.log(this.userForm);
    // pass the form inputs to the service
    this.myPayementServ.postPayement(this.userForm)
      .then((response: Payement) => {
        this.fetchPayements();
      })
      .catch((err) => {
        alert("Sorry! There was a problem submitting your payements! 😰");
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

  fetchBuildingId( id ) {
    this.myPayementServ.getBuildingId(id);
  }

}
