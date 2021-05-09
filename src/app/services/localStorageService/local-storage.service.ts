  
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  constructor() { }


  get(name:any){
    return localStorage.getItem(name);
  }
  set(name:any,value:any){
    localStorage.setItem(name,value);
  }
  removeItem(name:any){
    localStorage.removeItem(name);
  }
  clear(){
    localStorage.clear();
    return true;
  }
  getCurrentUser(){
    return localStorage.getItem("currentUser")
  }
 


}
