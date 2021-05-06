import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brandService/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message,"marka eklendi :)")},responseError=>
        {
          if(responseError.error.Errors>0){
        
             this.toastrService.error(responseError.error.Errors.ErrorMessage,"Doğrulama hatası")
           }
            
            
          }
        
      );
     
    } else {
      this.toastrService.error('form eksik!');
    }
  }
}
