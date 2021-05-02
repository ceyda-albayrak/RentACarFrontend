import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from 'src/app/components/brand/brand.component';
import { CarDetailComponent } from 'src/app/components/car-detail/car-detail.component';
import { CarComponent } from 'src/app/components/car/car.component';

const routes: Routes = [
  //anasyfada ne gözüksün=>
  //{path:"", pathMatch:"full",component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
