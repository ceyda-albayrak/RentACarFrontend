import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../../models/listResponseModel'
import {User } from '../../models/user'
import { LocalStorageService } from '../../services/localStorageService/local-storage.service'
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44378/api/Users/getbyid?id="
  jwtHelper: JwtHelperService = new JwtHelperService();
  token = this.localStorageService.get("Token");
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { }

  getByUser(id:number):Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+id);
  }

  getUserId(){
    let userId:number = parseInt(this.jwtHelper.decodeToken(this.token?.toString())["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
    return userId;
  }



  getByMail(email:string):Observable<SingleResponseModel<User>>{
    return this.httpClient.get<SingleResponseModel<User>>("https://localhost:44378/api/"+"users/getbymail?mail="+email);
  }
}
