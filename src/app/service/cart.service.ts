import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { Cart } from 'src/models/Cart';
import { AuthService } from './auth.service';

const apiServer = 'https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/cart';
@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private httpClient: HttpClient, private authService : AuthService) { }

  create(product: Product): Observable<any> {
    console.log(product)
    return this.httpClient.post(apiServer +`/${this.getUserId()}`+ '.json', product)
    // Implement getUserId()
    // const userId = "test"
    // return this.httpClient.post(apiServer + `/${userId}.json` , product);
  }

  getAll(): Observable<Cart[]> {
    return this.httpClient.get(apiServer +`/${this.getUserId()}`+ '.json')
      .pipe(
        map(
          data => !data ? [] :
            Object.entries(data).map(([key, val]) => ({ ...val, cartId: key }))))  
  }

  deleteItem(cardId : string): Observable<any>{
    return this.httpClient.delete(apiServer +`/${this.getUserId()}`+'/'+cardId + '.json')
  }

  private getUserId() {
    return this.authService.getUser()?.user_id;
  }

}
