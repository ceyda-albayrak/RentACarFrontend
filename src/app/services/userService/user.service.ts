import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../../models/listResponseModel'
import {User } from '../../models/user'
import { LocalStorageService } from '../../services/localStorageService/local-storage.service'
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

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

  getByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>('https://localhost:44378/api/users/getbymail?email='+email);
  }

  getByMail(email:string):Observable<SingleResponseModel<User>>{
    return this.httpClient.get<SingleResponseModel<User>>("https://localhost:44378/api/"+"users/getbymail?email="+email);
  }

  profileUpdate(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>('https://localhost:44378/api/users/updateprofile', {
      user:{
        'id': user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'status':user.status
      },
      password:user.password
    });
  }
}
