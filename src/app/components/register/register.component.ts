import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/registerModel';
import { RegisterService } from 'src/app/services/registerService/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(private registerService:RegisterService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
     
   
    })
  }

 

  register(){
    if(this.registerForm.valid){
  
      let registerModel=Object.assign({},this.registerForm.value);
      this.registerService.register(registerModel).subscribe(response=>{
        this.toastrService.success("Kullanıcı Oluşturuldu","Başarılı");
      },
      responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }

}
