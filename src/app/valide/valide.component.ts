import { Component, OnInit } from '@angular/core';
import { decision } from '../formulaire/decision.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-valide',
  templateUrl: './valide.component.html',
  styleUrls: ['./valide.component.css']
})
export class ValideComponent implements OnInit {

  decision:any;
  user:any;
  style:any;
  constructor(private api:ServiceService) {

   }

  ngOnInit(): void {
    let userdata: {add:string;mdp:string;from:string}= JSON.parse(localStorage.getItem('userdata') || '{}');   
    this.user=userdata
     this.api.getdecision().subscribe(res=>{
      this.decision=res
      console.log(this.decision)

    })
    if(this.user.type=='مصادق')
   { this.style=    "color: green;"}
   else
   {this.style=   " color: red;"}
  }
  storage(item:decision){
    console.log("here")
     localStorage.setItem('decision',JSON.stringify(item));
   }
}
