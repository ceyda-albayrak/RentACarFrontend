import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { Rental } from '../../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44378/api/';
  constructor(private httpClient:HttpClient) { }

  getRentals(rental:Rental):Observable<ResponseModel>{
    let newPath=this.apiUrl+"rentals/checkrentaldates"
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }

  getbyCarIdRentals(id:number):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/checkrentaldates"
    return this.httpClient.get<ListResponseModel<Rental>>("https://localhost:44378/api/Rentals/getbyid?id="+id);
  }


  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }

}
