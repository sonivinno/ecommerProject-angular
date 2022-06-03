import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/models/Cart';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  products: Cart[] = [];
  totalPrice!:number;
  constructor(private cartService: CartService,private router:Router , private authService : AuthService) { }

  ngOnInit() {
    this.getAllCart()
  }

  getAllCart() {
    this.cartService.getAll().subscribe(data => {
      this.products = data
      this.totalAmount(data)
    })
  }
  removeHandler(cardId: string) {
    console.log(this.products)
    this.cartService.deleteItem(cardId).subscribe(id => {
      this.getAllCart();
    })
  }

  totalAmount(products:any){
    console.log(products)
    let val= 0
    for(let productPrice of this.products){
      val+=productPrice.price
    this.totalPrice=val
    }
  }

  onChangeQuantity(event: any, item: any) {
    let quantity = event.target.value
   let products= this.products.map((product: any) => {
      if (product == item) {
        let item={...product,price:product.price*quantity}
        //  return item
      }
      return product;
    })
  }
  onPlaceOrder(){
    this.router.navigate(['/address'])
  }


}

