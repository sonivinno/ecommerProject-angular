import { Injectable } from '@angular/core';
import { ViewDataComponent } from '../view-data/view-data.component';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { Cart } from 'src/models/Cart';

const apiServer = 'https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/cart';
@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private httpClient: HttpClient) { }

  create(product: Product): Observable<any> {
    console.log(product)
    return this.httpClient.post(apiServer + '.json', product)
    // Implement getUserId()
    // const userId = "test"
    // return this.httpClient.post(apiServer + `/${userId}.json` , product);
  }

  getAll(): Observable<Cart[]> {
    return this.httpClient.get(apiServer + '.json')
      .pipe(
        map(
          data => Object.entries(data).map(([key, val]) => ({ ...val, cartId: key }))))
  }

  deleteItem(cardId : string): Observable<any>{
    console.log(cardId)
    return this.httpClient.delete(apiServer +'/'+cardId + '.json')
  }

}
