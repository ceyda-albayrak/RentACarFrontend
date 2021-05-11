import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { BrandAddComponent } from 'src/app/components/brand-add/brand-add.component';
import { BrandUpdateComponent } from 'src/app/components/brand-update/brand-update.component';
import { CarAddComponent } from 'src/app/components/car-add/car-add.component';
import { CarDetailComponent } from 'src/app/components/car-detail/car-detail.component';
import { CarUpdateComponent } from 'src/app/components/car-update/car-update.component';
import { CarComponent } from 'src/app/components/car/car.component';
import { ColorAddComponent } from 'src/app/components/color-add/color-add.component';
import { ColorUpdateComponent } from 'src/app/components/color-update/color-update.component';
import { CustomerComponent } from 'src/app/components/customer/customer.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { RentalComponent } from 'src/app/components/rental/rental.component';
import { LoginGuard } from 'src/app/guards/login.guard';


const routes: Routes = [
  //anasyfada ne gözüksün=>
  {path:"", pathMatch:"full",component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cars/rentals/:carId", component:RentalComponent},
  {path:"cars/customer",component:CustomerComponent},
  {path:"cars/brandadd",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"cars/coloradd", component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"cars/caradd", component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars/brandupdate/:brandId", component:BrandUpdateComponent,canActivate:[LoginGuard]},
  {path:"cars/colorupdate/:colorId", component:ColorUpdateComponent,canActivate:[LoginGuard]},
  {path:"cars/carupdate/:id", component:CarUpdateComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent,canActivate:[LoginGuard]},
  {path:"profile",component:ProfileComponent,canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
