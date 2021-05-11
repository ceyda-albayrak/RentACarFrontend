import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel'
import { Customer } from '../../models/customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44378/api/customers/getallcustomer';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }

  getById(id:number):Observable<ListResponseModel<Customer>> {
    let newPath=this.apiUrl+'brands/getbyid?id='+id;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
