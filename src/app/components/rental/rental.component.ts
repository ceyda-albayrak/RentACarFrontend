import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { CarService } from 'src/app/services/carService/car.service';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { RentalService } from 'src/app/services/rentalService/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  cars: Car[] = [];
  rentalAddForm: FormGroup;
  constructor(
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private customerService:CustomerService,
    private carService:CarService
  ) {}

  ngOnInit(): void {
    this.createRentalAddForm();
    this.getCars();

  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      carId: ['', Validators.required],
      customerId: ['', Validators.required],
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
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

}
