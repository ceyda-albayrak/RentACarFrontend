import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/carService/car.service';
import { CarImage } from 'src/app/models/carImage';

//backendeki dataya ulaşmak -> httpclient

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded=false;
  currentCar : Car;
  carImages:CarImage[];
  imgUrl="../../../assets"
  default="/Images/default.jpg"
  filterText="";
  
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
        if(params["brandId"]){
          this.getCarsbyBrand(params["brandId"])
        }
        else if(params["carId"]){
          this.getCarDetailsByCarId(params["carId"])
        }
        else if(params["colorId"]){
          this.getCarsbyColor(params["colorId"])
        }
        else{
          this.getCars();
        }
      })

  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsbyBrand(brandId:number){
    this.carService.getCarsbyBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsbyColor(colorId:number){
    this.carService.getCarsbyColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  getCarDetailsByCarId(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe(response =>{
      this.cars = response.data
    })
  }
 
}
