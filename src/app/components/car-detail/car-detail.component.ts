import { Component, OnInit,Input } from '@angular/core';
import { Car } from 'src/app/models/car';

import { CarService } from 'src/app/services/carService/car.service';

import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  
  cars: Car[] = [];
 
  imgUrl = '../../../assets';
  default = 'Images/ahmetinresmi.jpg';


  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
   


 
    
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailsByCarId(params['carId']);
    });
  }

 

  

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }



  
  
}


