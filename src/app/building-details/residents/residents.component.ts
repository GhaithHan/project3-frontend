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
 id: string;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myResidentServ: ResidentService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.appState = 'default';
    this.fetchResidents();
    // this.myActivatedRouteServ.paramMap
    // .subscribe((myParams) => {
    //   // "phoneId" comes from the route's PATH
    //   // { path: "phone/:phoneId", ... }
    //   this.id = myParams.get("???Id");
    // });
  }
  
  changeState(state, key = null){
    if(key){
      this.activeKey = key;
    }
    this.appState = state;
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
  // const { firstName } = this.residentItem;
  //   const isOkay = confirm(`Delete phone ${firstName}?`);

  //   if (isOkay) {
  //     this.myResidentServ.deleteResidentItem(this.id)
  //       .then(() => {
  //         // redirect away to the list page
  //         this.myRouterServ.navigateByUrl("/phones");
  //       })                // res.redirect("/phones") in Express
  //       .catch((err) => {
  //         alert("Sorry! There was a problem deleting the phone. 😨");
  //         console.log(err);
  //       });
  //    }
  // }

}
