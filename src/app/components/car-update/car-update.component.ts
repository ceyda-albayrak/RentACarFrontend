import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brandService/brand.service';
import { CarService } from 'src/app/services/carService/car.service';
import { ColorService } from 'src/app/services/colorService/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carDetails: CarDetail;
  brands: Brand[];
  colors: Color[];
  carUpdateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['id']);
      this.getColors();
      this.getBrands();
    });
  }

  getCarById(id: number) {
    this.carService.getById(id).subscribe((response) => {
      this.carDetails = response.data[0];
      this.createCarUpdateForm();
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id: [this.carDetails.id, Validators.required],
      brandId: [this.carDetails.brandId, Validators.required],
      colorId: [this.carDetails.colorId, Validators.required],
      carName: [this.carDetails.carName, Validators.required],
      dailyPrice: [this.carDetails.dailyPrice, Validators.required],
      modelYear: [this.carDetails.modelYear, Validators.required],
      description: [this.carDetails.description, Validators.required],
    });
  }

  update() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Successful');
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Validation Error'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('The form is missing.', 'Attention!');
    }
  }
}
