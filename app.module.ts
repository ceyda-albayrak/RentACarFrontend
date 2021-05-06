import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './src/app/pipes/filter-pipe.pipe';
import {ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './src/app/components/cart-summary/cart-summary.component';
import { BrandFilterPipe } from './src/app/pipes/brand-filter.pipe';
import { ColorFilterPipe } from './src/app/pipes/color-filter.pipe';
import { RentalCarComponent } from './src/app/components/rental-car/rental-car.component'
import { BrandAddComponent } from './src/app/components/brand-add/brand-add.component';
import { ColorAddComponent } from './src/app/components/color-add/color-add.component';
import { CarAddComponent } from './src/app/components/car-add/car-add.component';
import { BrandUpdateComponent } from './src/app/components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './src/app/components/color-update/color-update.component';
import { CarUpdateComponent } from './src/app/components/car-update/car-update.component';
import { LoginComponent } from './src/app/components/login/login.component';
import {MatIconModule} from '@angular/material/icon';

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
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    RentalCarComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    CarUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    MatSelectModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
