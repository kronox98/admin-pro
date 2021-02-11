import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { loginForm, RegisterForm } from '../interfaces/interfaces';
const BACK_URL = environment.BACK_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  registerUser(form: RegisterForm) {
    return this._http.post(`${BACK_URL}/users`, form);
  }

  loginUser(form: loginForm) {
    return this._http.post(`${BACK_URL}/login`, form);
  }
}
