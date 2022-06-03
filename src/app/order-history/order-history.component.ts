import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../service/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orderData : any;
  featuresData : any;
  orderItem : any;

  constructor(private orderService : OrderHistoryService) { }

  ngOnInit(){
    this.getHistoryData()
  }

  getHistoryData(){
    this.orderService.getAll().subscribe(item=>{
      console.log("dddddd",item)
      this.orderItem = item
      this.orderData = item[0];
      this.featuresData = this.orderData.items
      console.log("final",this.orderData.userAddress.firstName)
    })
    
  }
}
