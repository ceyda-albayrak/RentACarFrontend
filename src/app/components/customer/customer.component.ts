import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import {Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[]=[];
  dataLoaded=false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers()
  {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data;
      this.dataLoaded=true;
    })
  }



}
