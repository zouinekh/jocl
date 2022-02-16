import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup
  service:ServiceService
  constructor( private formBuilder:FormBuilder,private router:Router,private http:HttpClient,sr:ServiceService) {
    this.service=sr;
   }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      adress:[''],
      mdp:[''] })
  }
  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.add==this.loginForm.value.adress && 
        a.mdp==this.loginForm.value.mdp
        
      });
      if (user){
        
        alert("   login success ");
        this.loginForm.reset();
        this.router.navigate(['home'])
        localStorage.setItem('userdata',JSON.stringify(user));
        
      }
      else
      {alert("user not found");}

    },err=>{alert("worng")}
    )
  }

}