import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable, tap } from 'rxjs';

const API_KEY = "AIzaSyAZaFfbwAHzWl1ujC8yW7i0zIP7itAvxLY";

const apiServer = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject(!!localStorage.getItem('token'));

  constructor(private httpClient : HttpClient){ }

  register(credential: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(`${apiServer}/signupNewUser?key=${API_KEY}`, {...credential, returnSecureToken: true})
  }

  login(loginCredential: { email: string, password: string }): Observable<any>{
    return this.httpClient.post<{idToken: string}>(`${apiServer}/verifyPassword?key=${API_KEY}`, {...loginCredential, returnSecureToken: true}).pipe(tap(data => {
      localStorage.setItem('token', data.idToken);
      this._isLoggedIn.next(true);
    }))
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isLoggedIn.next(false);
  }

  get isLoggedIn() {
    return this._isLoggedIn.asObservable();
  }

  getAuthStatus(){
    return this._isLoggedIn.getValue();
  }

}
