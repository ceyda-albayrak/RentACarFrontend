import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from 'src/app/models/registerModel';
import { ResponseModel } from 'src/app/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'https://localhost:44378/api/auth/register';
  constructor(private httpClient:HttpClient) { }

  register(registerModel:RegisterModel):Observable<ResponseModel>{
    
    return this.httpClient.post<ResponseModel>(this.apiUrl,registerModel);
  }
}
