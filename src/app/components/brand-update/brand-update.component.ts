import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brandService/brand.service';
import { Brand } from 'src/app/models/brand'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm:FormGroup
  brandDetails: Brand;
  constructor(private brandService:BrandService,private toastrService:ToastrService,private formBuilder:FormBuilder, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBrandDetails(params['brandId']);
    });
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brandDetails.brandId, Validators.required],
      brandName: [this.brandDetails.brandName, Validators.required],
    });
  }

  getBrandDetails(brandId: number) {
    this.brandService.getById(brandId).subscribe((response) => {
      this.brandDetails = response.data[0];
      this.createBrandUpdateForm();
    });
  }

  
  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe(
        (response) => {
          
          this.toastrService.success(response.message, 'Successfull');
        },
        responseError=>{
          this.toastrService.error(responseError.error)
        }
       
      );
    } else {
      this.toastrService.error('Form is missing', 'Warning');
    }
  }
  

}
