import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OrderHistoryService } from '../service/order-history.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  orderData: any;
  // @Input() displayProfile :any

  constructor(private orderService: OrderHistoryService) { }

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.orderService.getAll().subscribe((value) =>{
      console.log('gggggggggggg',value)
      // this.orderData = value[0].userAddress;
      // console.log("final",this.orderData.firstName)
    })
  }

}
