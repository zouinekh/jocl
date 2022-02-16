import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { decision } from './formulaire/decision.module';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public loginuser1:any;
  constructor(private http:HttpClient) { }
      
      getUsers(){
        return this.http.get<Users[]>("http://localhost:3000/users")
        .pipe(map((res:any)=>{
          return res;
        }))
      } 
      setdecision(data:decision){
        return this.http.post<decision[]>("http://localhost:3000/decision",data)
        .pipe(map((res:any)=>{
          return res;
        }))
      }
      
      getdecision(){
        return this.http.get<decision[]>("http://localhost:3000/decision")
        .pipe(map((res:any)=>{
          return res;
        }))
      } 
      updatedecision(data:decision,id:string){
        return this.http.put<decision[]>("http://localhost:3000/decision/"+id,data)
        .pipe(map((res:any)=>{
          return res;
        }))
      } 
      updateuser(data:Users,id:string){
        return this.http.put<Users[]>("http://localhost:3000/users/"+id,data)
        .pipe(map((res:any)=>{
          return res;
        }))
      } 
      getUser(id:string){
        return this.http.get<Users[]>("http://localhost:3000/users/"+id)
      .pipe(map((res:Users[])=>{
        return res;
      }))
        
      }
}
