import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/models/wishlist';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlistProducts: Wishlist[] = [];

  constructor(private wishlistService : WishlistService ) { }

  ngOnInit(){
    this.getAllWishlist()
  }

  getAllWishlist(){
      this.wishlistService.getAll().subscribe(data=>{
      console.log(data)
      this.wishlistProducts = data
    })
  }

}
