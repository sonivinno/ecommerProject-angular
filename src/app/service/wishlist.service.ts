import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { map,Observable } from 'rxjs';
import { AuthService } from './auth.service';

const API_SERVER = 'https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/wishlist'
@Injectable({
  providedIn: 'root'
})

export class WishlistService {

  constructor(private httpClient : HttpClient, private authService: AuthService) {}

  create(wishlistProduct : Product) : Observable<any>{
    console.log(wishlistProduct)
    return this.httpClient.post(API_SERVER + `/${this.getUserId()}` + '.json', wishlistProduct)
  }

  getAll(): Observable<any>{
    return this.httpClient.get(API_SERVER + `/${this.getUserId()}` + '.json')
    .pipe(
      map(data => !data ? [] : Object.entries(data).map(([key , val])=>({...val , wishlistId : key}))))
  }

  deleteItem(wishlistId : string): Observable<any>{
    console.log(wishlistId)
    return this.httpClient.delete(API_SERVER + `/${this.getUserId()}` +'/'+wishlistId + '.json')
  }

  private getUserId() {
    return this.authService.getUser()?.user_id;
  }
  
}
