import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './src/app/app.component';
import { CarComponent } from './src/app/components/car/car.component';
import { NavbarComponent } from './src/app/components/navbar/navbar.component';
import { BrandComponent } from './src/app/components/brand/brand.component';
import { CustomerComponent } from './src/app/components/customer/customer.component';
import { RentalComponent } from './src/app/components/rental/rental.component';
import { ColorComponent } from './src/app/components/color/color.component';
import { CarDetailComponent } from './src/app/components/car-detail/car-detail.component';
import { VatAddedPipe } from './src/app/pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavbarComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    ColorComponent,
    CarDetailComponent,
    VatAddedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
