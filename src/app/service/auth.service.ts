import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable, tap } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { User } from 'src/models/User';

const API_KEY = "AIzaSyAZaFfbwAHzWl1ujC8yW7i0zIP7itAvxLY";

const apiServer = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject(!!localStorage.getItem('token'));
  private _user: User | null = null;

  constructor(private httpClient : HttpClient){
    const token = localStorage.getItem('token');
    if(token) this._setUser(token);
   }

  register(credential: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(`${apiServer}/signupNewUser?key=${API_KEY}`, {...credential, returnSecureToken: true})
  }

  login(loginCredential: { email: string, password: string }): Observable<any>{
    return this.httpClient.post<{idToken: string}>(`${apiServer}/verifyPassword?key=${API_KEY}`, {...loginCredential, returnSecureToken: true}).pipe(tap(data => {
      localStorage.setItem('token', data.idToken);
      this._setUser(data.idToken);
      this._isLoggedIn.next(true);
    }))
  }
  
  private _setUser(token: string) {
    this._user = jwtDecode(token);
  }

  logout(){
    localStorage.removeItem('token');
    this._user = null;
    this._isLoggedIn.next(false);
    this._user = null;
  }

  get isLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  getAuthStatus(){
    return this._isLoggedIn.getValue();
  }

  getUser() {
    return this._user;
  }

}
