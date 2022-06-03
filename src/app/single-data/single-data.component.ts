import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ProductServiceService } from '../service/product-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from 'src/models/Cart';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})
export class SingleDataComponent implements OnInit {
  product: any
  getAddData : Cart[]=[]
  isLoggedInAuthenticationChecking! : boolean
  constructor(private route: ActivatedRoute, private productService: ProductServiceService, 
    private cartService: CartService, private authService: AuthService, private router : Router){ }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedInAuthenticationChecking = isLoggedIn
    })
    // this.route.params.subscribe(params => {
    //   this.id = params['id']
    //   this.productService.getById(id).subscribe(product =>{
    //     this.product= product
    //   })
    // });

    this.getAllAddToCartData()

    this.route.params.pipe(mergeMap(params => {
      let id = params['id']
      return this.productService.getById(id);
    })).subscribe(product => {
      this.product = product;
    })
  }


  getAllAddToCartData(){
    this.cartService.getAll().subscribe(data =>{
      this.getAddData = data
    })
  }

  addToCartHanler(product : any){
    console.log(this.getAddData)
    let isCheckAddtoCart = this.getAddData.find((value) => {
      return value.id === product.id
    })

    if(!this.isLoggedInAuthenticationChecking){
      this.router.navigate(['login'])
    }else{
      !isCheckAddtoCart && this.cartService.create(product).subscribe()
    }
  }

  

}

