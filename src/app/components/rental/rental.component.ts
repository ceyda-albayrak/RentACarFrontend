import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/carService/car.service';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { RentalService } from 'src/app/services/rentalService/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  cars: CarDetail[] = [];
  rentals:Rental[]=[];
  customer:Customer;
  rentalAddForm: FormGroup;
  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private customerService:CustomerService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
    this.createRentalAddForm();
    this.getbyCarIdRentals(params['carId']);
    this.getCars(params['carId']);
    
    });

  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
       customerId: [this.customer.customerId, Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  rental() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);
      this.rentalService.getRentals(rentalModel).subscribe(response=>{
        this.rentalService.addRental(rentalModel).subscribe(
          (response) => {
            this.toastrService.success('Araba kiralandı', 'Başarılı');
          },
          (responseError) => {
            this.toastrService.error(responseError.error);
          }
        );
      })
      
     
    }
  }
  getCars(id:number) {
    this.carService.getById(id).subscribe((response) => {
      this.cars=response.data;
    });
  }

  getCustomers(id:number){
    this.customerService.getById(id).subscribe(response=>{
      this.customer=response.data[0];
      
    })
  }

  getbyCarIdRentals(id:number) {
    this.rentalService. getbyCarIdRentals(id).subscribe((response) => {
      this.rentals = response.data;
     
    });
  }

}
