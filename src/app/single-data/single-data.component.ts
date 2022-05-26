import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})
export class SingleDataComponent implements OnInit {
  product: any
  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = params['id']
    //   this.productService.getById(id).subscribe(product =>{
    //     this.product= product
    //   })
    // });

    this.route.params.pipe(mergeMap(params => {
      let id = params['id']
      return this.productService.getById(id);
    })).subscribe(product => {
      this.product = product;
    })
  }


}

