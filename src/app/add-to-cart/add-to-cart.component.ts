import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/models/Cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  products: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(){
    this.getAllCart()
  }

  getAllCart() {
    this.cartService.getAll().subscribe(data=>{
      this.products = data
    })
  }
  removeHandler(cardId: string){
    console.log(cardId)
    this.cartService.deleteItem(cardId).subscribe(id=>{
      this.getAllCart();
    })
  }
}
