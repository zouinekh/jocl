import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms";
import { ServiceService } from '../service.service';
import { Users } from '../users';
import { decision } from './decision.module';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
   user:any
   add:any
   from:any
   date:any
   maDate: Date = new Date
   formValue !:FormGroup
   decision:decision=new decision();
   x:String;
   style:any;
   liste:string[];
   acc:any;
   
  constructor(private formbuilder:FormBuilder ,private api:ServiceService) {
    this.x="";
  
    this.liste=['تقرير','مدولات','توزيع أعتمدات رسمية',' قرارات أخرى','تفويض امضاء','مصادقة على اتفاقية ','مصادقة على اتفاقية مع منظمة حكومية','رأي'];
   }

  ngOnInit(): void {
    let userdata: {add:string;mdp:string;numid:number;type:string;from:string;num:string;id:string}= JSON.parse(localStorage.getItem('userdata') || '{}');
    this.user=userdata;
    this.add=this.user.add.replace('"','')//getting the user name
    this.from=this.user.from.replace('"','')//getting info from localStoarge(user conecte)
    this.date = this.maDate.getDate() + '/' + ((this.maDate.getMonth() + 1)) + '/' + this.maDate.getFullYear()
    this.api.getUser(this.user.id).subscribe(res=>{
      this.acc=res;
   })
   console.log(this.acc)

//importation des information from formulaire 
    this.formValue=this.formbuilder.group({
      textTitre :[''],
      Btext:[''],
      Stext:[''],
      typeText:[''],
      Name:[''],
      date:[''],
      text:[''],
      file:['']
    })
    console.log(this.liste)
  }
  

   
    postdecisiondetails(){
      this.decision.Btext=this.formValue.value.Btext;
      this.decision.textTitre=this.formValue.value.textTitre;
      this.decision.Name=this.formValue.value.Name;
      this.decision.typeText=this.formValue.value.typeText;
     if (this.formValue.value.typeText=="قرار") {this.decision.Stext=this.formValue.value.Stext;}
      this.decision.date=this.formValue.value.date;
      this.decision.text=this.formValue.value.text;
      this.decision.file=this.formValue.value.file;
      this.decision.statue=false;
      this.decision.mod=this.user.add
      this.decision.from=this.user.from;
      this.decision.user=this.user;
      console.log(this.decision.Stext)
      console.log(this.decision)
      if ((this.decision.Btext==""||this.decision.Btext==null)||
        (this.decision.textTitre==""||this.decision.textTitre==null)||
        (this.decision.Name==""||this.decision.Name==null)||
        (this.decision.Stext==""||this.decision.Stext==null)||
        (this.decision.typeText==""||this.decision.typeText==null)||
        (this.decision.date==""||this.decision.date==null)||
        (this.decision.text==""||this.decision.text==null)||
        (this.decision.file==""||this.decision.file==null)) {
          alert(" يرجى ملء الأستمارة")
        
           this.x="  champ est obligatoire !!"
            this.style="border-color: #e61010c0;background-image: none;"
      }
      else{
       
        this.acc.numid+=1;
      
        console.log(this.acc.numid)
        this.decision.id= this.maDate.getFullYear()+this.user.id+'000'+this.acc.numid
        console.log(this.decision.id)
      this.api.setdecision(this.decision).subscribe(res=>{
        console.log(res);
        
        alert("decision added")
        this.api.updateuser(this.acc,this.acc.id).subscribe(res=>{
          console.log("user updated")
        })
        this.formValue.reset();
        
        this.x=""
            this.style=""
      },err=>{
                alert("something wrong")
      }
      )
    }
 
}


select(){
  if (this.formValue.value.typeText=="قرار"){
  
    this.liste=['توزيع أعتمدات رسمية',' قرارات أخرى','تفويض امضاء','مصادقة على اتفاقية ','مصادقة على اتفاقية مع منظمة حكومية'];
  }
  else if (this.formValue.value.typeText=="رأي"){
    this.liste=['رأي']
    this.decision.Stext="رأي";

  
  }
  else if (this.formValue.value.typeText=="مدولات"){
    this.liste=['مدولات']
    this.decision.Stext="مدولات";

  }
  else if (this.formValue.value.typeText=="تقرير"){
    this.liste=['تقرير']
   this.decision.Stext="تقرير";

  }

}
}
