import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { Rental } from '../../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44378/api/';
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  checkRentalDates(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'rentals/checkrentaldates';
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }
  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }
}
