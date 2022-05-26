import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../../models/product';

const apiServer = 'https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/product.json';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  getSearchString = new BehaviorSubject('');

  constructor(private httpClient: HttpClient) {
    console.log(httpClient)
  }
  getAll(): Observable<any> {
    return this.httpClient.get(apiServer);
  }

  getById(id: string) {
    return this.getAll().pipe(map(products => products.find((product:any) => {
      return id == product.id
    })))
  }
}
