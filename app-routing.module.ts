import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RentalCarComponent } from 'src/app/components/rental-car/rental-car.component';


const routes: Routes = [
  //anasyfada ne gözüksün=>
  {path:"", pathMatch:"full",component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"cars/rentalcar", component:RentalCarComponent},
  {path:"cars/customer",component:CustomerComponent},
  {path:"cars/brandadd",component:BrandAddComponent},
  {path:"cars/coloradd", component:ColorAddComponent},
  {path:"cars/caradd", component:CarAddComponent},
  {path:"cars/brandupdate/:brandId", component:BrandUpdateComponent},
  {path:"cars/colorupdate/:colorId", component:ColorUpdateComponent},
  {path:"cars/carupdate/:id", component:CarUpdateComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
