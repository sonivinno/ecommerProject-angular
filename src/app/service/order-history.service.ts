import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Orderhistory } from 'src/models/orderhistory';
import { AuthService } from './auth.service';


const API_SERVER = "https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/orderhistory"
@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor( private httpClient : HttpClient, private authService : AuthService) { }

  create(orderhistory : Omit<Orderhistory, 'orderId'>) : Observable<any>{
    return this.httpClient.post(API_SERVER +`/${this. getUserId() }`+ '.json', orderhistory)
  }

  getAll(): Observable<Orderhistory[]>{
    return this.httpClient.get(API_SERVER + `/${this.getUserId()}`+'.json')
    .pipe(
      map(
        data => !data ? []:Object.entries(data).map(([key,val])=>({...val, orderId: key}))))
  }

  private getUserId() {
    return this.authService.getUser()?.user_id;
  }
}
