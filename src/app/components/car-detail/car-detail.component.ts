import { Component, OnInit,Input } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Rental } from '../../models/rental';
import { Customer } from '../../models/customer';
import { CarService } from 'src/app/services/carService/car.service';
import { CustomerService } from 'src/app/services/customerService/customer.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cartService/cart.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormBuilder,Validators  } from '@angular/forms';
import { RentalService } from 'src/app/services/rentalService/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  
  cars: Car[] = [];
  customers:Customer[]=[];
  customer:Customer;
  rental: Rental;
  RentalActionForm: FormGroup;
  isrentaled=false;
  imgUrl = '../../../assets';
  default = 'Images/ahmetinresmi.jpg';
  closeModal: string;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService,
    private modalService: NgbModal,
    private FormBuilder: FormBuilder,
    private rentalService:RentalService,
    private customerService: CustomerService,
 
    
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetailsByCarId(params['carId']);
    });
  }

  createRentalActionForm() {
    this.RentalActionForm = this.FormBuilder.group({
      brandName: ['', Validators.required]
    });
  }

  actionBuild() {
    if (this.RentalActionForm.valid) {
      let rentalModel = Object.assign(this.rental, this.RentalActionForm.value);
      
        this.rentalService.addRental(rentalModel).subscribe(response => {
          if (response.success) {
            this.toastrService.success("Ekleme işleminiz gerçekleştirildi.", "Başarılı");
          } else {
            this.toastrService.error("Ekleme işleminiz gerçekleştirilemedi.", "Başarısız");
          }
        });
      }
    
    else {
      this.toastrService.error("Lütfen gerekli yerleri doldurunuz!", "Hata");
    }
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  compareDate() {
    this.isrentaled = false;
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  rentalCar(car: Car) {
    this.toastrService.success('Araba Kiralandı', car.carName);
    this.cartService.addToCart(car);
  }

  cancelRental(car:Car){
    this.toastrService.error('Araba kiralama iptal edildi',car.carName);
    this.cartService.cancelRental(car);
  }

  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  
  
}


