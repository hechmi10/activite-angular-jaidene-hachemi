import { Injectable } from '@angular/core';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsers(list:User[]){
    console.log(list);
  }
  fetchNbInList(list:any,attribute:string,attributeVal:string){
    let nb!:number;
    list.forEach(() => {
      if(attribute===attributeVal){
        nb+=1
      }
    });
    console.log(nb);
  }
}
