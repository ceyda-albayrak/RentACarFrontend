import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorageService/local-storage.service';
import { AuthService } from 'src/app/services/loginService/auth.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 

  user:User = new User();
  userId:number;
  isAuthenticated:boolean
  constructor(
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService,
    private storage:LocalStorageService
  ) { }

  ngOnInit(): void {
    if (this.checkIfLogin()) {
      
      this.getUserByEmail();
      this.getUserId();
      
  }

  

}
getFullName(): string {
  return this.authService.getCurrentFullName();
}


checkIfLogin(){
  if (this.authService.isAuthenticated()) {
    return true
  }else{
    return false
  }
}

getUserId(){
  this.userId =  this.userService.getUserId()
 }


 getUserByEmail() {
   console.log("Çalıştı ")
   this.userService.getByMail(localStorage.getItem("email")).subscribe((response) => {
     this.user = response.data;
   });
 }

 logOut(){
  this.authService.logOut();
  this.toastrService.info("Başarılı  Çıkış Yapıldı")
  this.router.navigate([""])    
}


}
