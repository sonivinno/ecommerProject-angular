import { Injectable } from '@angular/core';
import { login } from 'src/models/Login';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

const apiServer = 'https://ecommerceprojectangular-default-rtdb.asia-southeast1.firebasedatabase.app/users.json';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

}
