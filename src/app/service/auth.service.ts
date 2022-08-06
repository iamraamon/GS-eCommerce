import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/interface/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('guntur');
  }
}
