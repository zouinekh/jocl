import { Component, OnInit } from '@angular/core';
import { Users } from '../users';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public image1="../../assets/Coat_of_arms_of_Tunisia.svg.png"
  users:Users[]=[];
  user:any
  add:any
  menu:any
  constructor() {

   }

  ngOnInit(): void {
   let userdata: {add:string;mdp:string}= JSON.parse(localStorage.getItem('userdata') || '{}');
   this.user=userdata;
   this.add=this.user.add.replace('"','')
   
  }
  
}
