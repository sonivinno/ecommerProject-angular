import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/models/wishlist';
import { CartService } from '../service/cart.service';
import { WishlistService } from '../service/wishlist.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlistProducts: Wishlist[] = [];
  isCheckingWishlist : boolean = true

  constructor(private wishlistService : WishlistService, private cartService : CartService ) { }

  ngOnInit(){
    this.getAllWishlist()
  }

  getAllWishlist(){
      this.wishlistService.getAll().subscribe(data=>{
      console.log(data)
      this.wishlistProducts = data
    })
  }
  
  addToCartHanler(wishlistItem:any){
    console.log(wishlistItem)
    this.cartService.create(wishlistItem).subscribe();
  }

  removeWishlist(wishListId : any){
    this.isCheckingWishlist = false
    this.wishlistService .deleteItem(wishListId).subscribe( data =>{
    this.getAllWishlist()
    })
  }

  

}
