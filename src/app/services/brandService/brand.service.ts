import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel';
import {ResponseModel } from '../../models/responseModel';
import { Brand } from '../../models/brand'
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44378/api/';
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getById(brandId:number):Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+'brands/getbyid?id='+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"brands/update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

}
