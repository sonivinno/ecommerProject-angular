import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { OrderHistoryService } from '../service/order-history.service';
import { Orderhistory, OrderStatus } from 'src/models/orderhistory';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-detail',
  templateUrl: './all-detail.component.html',
  styleUrls: ['./all-detail.component.scss']
})
export class AllDetailComponent implements OnInit {
  historyData : Orderhistory[] = [];
  addData : any ;
  formData : any;
  FormAddresss : any;

  constructor(private cartService : CartService, private orderService : OrderHistoryService,private router: Router) { }

  ngOnInit(){
    this.cartService.getAll().subscribe(data=>{
      this.addData=data
      console.log(data); 
   })
  }
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address : new FormControl(''),
    zip : new FormControl(''),
    email : new FormControl(''),
  });

  submitForm(){
    console.log('submitForm')
    // console.log(this.profileForm.value)
    this.FormAddresss = this.profileForm.value
    const newOrder = {
      date: Date.now(),
      status: OrderStatus.confirm,
      totlaPrice: '1222',
      items: this.addData,
      userAddress: {
        firstName : this.FormAddresss.firstName,
        lastName : this.FormAddresss.lastName,
        address : this.FormAddresss.address,
        zip : this.FormAddresss.zip,
        email : this.FormAddresss.email
      }
    }
    console.log(newOrder)
    // console.log(this.historyData)
    this.orderService.create(newOrder).subscribe((res) => {
      console.log(res)
     res && this.router.navigate(['order-confirm'])
    })
  }

  // getDetailData(){
  //   this.orderService.getHistoryData().subscribe(data =>{
  //     this.historyData = data
  //   })
  // }

}
