import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/colorService/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  colorDetails:Color;
  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastrService:ToastrService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getColorDetails(params['colorId']);
    });
  }

  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorId:[this.colorDetails.colorId,Validators.required],
      colorName:[this.colorDetails.colorName,Validators.required]
    })
  };

  getColorDetails(colorId:number){
    this.colorService.getById(colorId).subscribe(response=>{
      this.colorDetails=response.data[0];
      this.createColorUpdateForm();
    })
  }

  update(){
    if(this.colorUpdateForm.valid){
      let colorModel=Object.assign({},this.colorUpdateForm.value);
      return this.colorService.update(colorModel).subscribe(response=>{
        return this.toastrService.success(response.message,"Renk güncellendi");
      })
    }
    else{
      return this.toastrService.error("hatalı form","Warning");
    }
  }

}
