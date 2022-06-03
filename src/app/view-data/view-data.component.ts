import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../../models/product';
import { ProductServiceService } from '../service/product-service.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { WishlistService } from '../service/wishlist.service';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
  products: Product[] = [];
  wishList: any[] = [];
  filteredProducts: Product[] = [];
  isLoggedInAuthenticationChecking!: boolean;
  isCheckingWishlist: boolean = false;

  isAddToWishlist: boolean = false

  constructor(private productService: ProductServiceService, private cartService: CartService,
    private authService: AuthService,
    private route: Router, private wishlistService: WishlistService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedInAuthenticationChecking = isLoggedIn
    })
    this.productService.getAll()
      .subscribe(data => {
        this.products = data
        this.filteredProducts = this.products;
      });

    this.getWishList();


    this.productService.getSearchString.subscribe(searchTerm => {
      if (searchTerm) {
        this.filteredProducts = this.products.filter(p => p.title.toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase()))
      } else this.filteredProducts = this.products;
    })
  }

  getWishList() {
    this.wishlistService.getAll().subscribe(wishlistProducts => {
      this.wishList = wishlistProducts;
    })
  }

  addToCartHanler(product: any) {
    this.cartService.getAll().subscribe(products => {
      // console.log(products);
      let item = products.find((value: any) => {
        return product.id === value.id
      });

      if (!this.isLoggedInAuthenticationChecking) {
        this.route.navigate(['login'])
      } else {
        !item && this.cartService.create(product).subscribe();
      }
    })
    // console.log(this.isLoggedInAuthenticationChecking )
  }

  addToWishlist(product: any) {
    if (!this.isLoggedInAuthenticationChecking) {
      this.route.navigate(['login'])
    } else {
      let isAlreadyWishlisted = this.isProductInWishlist(product.id);
      if (isAlreadyWishlisted) {
        // Remove from wishlist
        let wp = this.wishList.find((value: any) => {
          return product.id === value.id
        });
        this.wishlistService.deleteItem(wp.wishlistId).subscribe(() => {
          this.getWishList();
        })
      } else {
        // Add to wishlist
        let p = this.products.find((value: any) => {
          return product.id === value.id
        });
        this.wishlistService.create(p!).subscribe(() => {
          this.getWishList();
        })
      }
      // !wishlistItem && this.wishlistService.create(product).subscribe();
      // this.getWishList();
      // wishlistItem && this.wishlistService.deleteItem(product).subscribe();
      // this.getWishList();
    }
  }

  isProductInWishlist(productId: number) {
    return this.wishList.some(wl => wl.id === productId);
  }


}
