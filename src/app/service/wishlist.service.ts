import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { Wishlist } from 'src/models/wishlist';
import { map,Observable } from 'rxjs';

const API_SERVER = 'https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist'
@Injectable({
  providedIn: 'root'
})

export class WishlistService {

  constructor(private httpClient : HttpClient) {}

  create(wishlistProduct : Product) : Observable<any>{
    console.log(wishlistProduct)
    return this.httpClient.post(API_SERVER + '.json', wishlistProduct)
  }

  getAll(): Observable<any>{
    return this.httpClient.get(API_SERVER + '.json')
    .pipe(
      map(data => Object.entries(data).map(([key , val])=>({...val , cartId : key}))))
  }
}
