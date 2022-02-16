import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms";
import { ServiceService } from '../service.service';
import { decision } from '../formulaire/decision.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']

})
export class DecisionComponent implements OnInit {
  decision:any;
  user:any;
  titre:any

  constructor(private api:ServiceService,private router:Router) {
 
   }

  ngOnInit(): void {
    let userdata: {add:string;mdp:string;from:string}= JSON.parse(localStorage.getItem('userdata') || '{}');   
    this.user=userdata
     this.api.getdecision().subscribe(res=>{
      this.decision=res
      console.log(this.decision)

    })
  }
change(item:decision){
  let id=item.id;
   item.statue=true;
   let data=item;
   this.api.updatedecision(data,id).subscribe(res=>{
     alert("تمت المصادقة")
   })
}
cor(item:decision){
  let id=item.id
  item.cor=true;
  let data=item
  this.api.updatedecision(data,id).subscribe(res=>{
    alert("قرار للأصلاح")
  })
}

storage(item:decision){
 console.log("here")
  localStorage.setItem('decision',JSON.stringify(item));
}

}
