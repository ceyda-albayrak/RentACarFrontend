import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cartService/cart.service';
import { Car } from '../../models/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems=this.cartService.list();
  }

  cancelRental(car:Car){
    this.toastrService.error('Araba kiralama iptal edildi',car.carName);
    this.cartService.cancelRental(car);
  }

}
