import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from "rxjs/operators";

import { loginForm, RegisterForm } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const BACK_URL = environment.BACK_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private _router: Router) { }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this._http.get(`${BACK_URL}/login/refresh`, {
      headers: {
        'Authorization': token
      }
    }).pipe(
      tap( resp => {
        if (resp['ok']) {
          localStorage.setItem('token', resp['token'])  ;
        }
        console.log(resp);        
      }),map( res => true),
      catchError( err => of(false))
    )
  }

  registerUser(form: RegisterForm) {
    return this._http.post(`${BACK_URL}/users`, form)
    .pipe(
      tap( resp => {
        if (resp['ok']) {
          localStorage.setItem('token', resp['token'])  ;
        }
        console.log(resp);        
      })
    )
  }

  loginUser(form: loginForm) {
    return this._http.post(`${BACK_URL}/login`, form)
    .pipe(
      tap( resp => {
        if (resp['ok']) {
          localStorage.setItem('token', resp['token'])  ;
        }
        console.log(resp);        
      })
    )
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }
}
