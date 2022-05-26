import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './service/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ecommerceProject';

  constructor(private productService : ProductServiceService){

  }
  ngOnInit(){
    this.productService.getAll()
      .subscribe(data => {
        console.log(data)
      })
  }
}
