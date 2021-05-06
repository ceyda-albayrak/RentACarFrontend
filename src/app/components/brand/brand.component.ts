import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brandService/brand.service';
import { CarService } from 'src/app/services/carService/car.service';
import { Brand} from '../../models/brand';
import { Car } from '../../models/car';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],

})
export class BrandComponent implements OnInit {
  brands : Brand[]=[];
  cars:Car[]=[];
  currentBrand : Brand;
  currentCar : Car;
  filterText1 = '';



  constructor(private brandService:BrandService,private carService:CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }



  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand)
  {
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item list-group-item-light"
    }
  }

}
