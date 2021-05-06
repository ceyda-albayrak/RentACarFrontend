import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../../models/listResponseModel'
import { Car } from '../../models/car'
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { CarDetail } from 'src/app/models/carDetail';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44378/api/';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getallcar"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsbyBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsbyColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getById(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  add(car:Car):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  update(car:CarDetail):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

}
