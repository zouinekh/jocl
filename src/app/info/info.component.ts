import { Component, OnInit } from '@angular/core';
import { decision } from '../formulaire/decision.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  decis:any
  user:any
  style:any
  constructor(private api:ServiceService) {
   
   }

  ngOnInit(): void {
    let decision: {textTitre:string;Btext:string;Stext:string;typeText:string; Name:string; date:string;text:string;file:string;statue:boolean;mod:string;from:string;cor:boolean}= JSON.parse(localStorage.getItem('decision') || '{}');
    this.decis=decision
    let userdata: {add:string;mdp:string;numid:number;type:string;from:string;num:string;id:string}= JSON.parse(localStorage.getItem('userdata') || '{}');
    this.user=userdata;
    console.log(this.decis)
    if(this.user.type=='مصادق' && this.decis.statue==true){
      this.style="color:green"
    }
   if( this.user.type==='مدرج'&& this.decis.cor===true){
     this.style="color:red"
   }
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
}
