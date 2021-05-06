import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = 'https://localhost:44378/api/';

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath=this.apiUrl+"carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath=this.apiUrl+"carimages/getimagesbyid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
