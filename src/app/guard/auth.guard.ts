import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   isLoggedIn_var:string;
  constructor(private router: Router) { }  

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

              this.isLoggedIn_var = localStorage.getItem('isLoggedIn');

              if(this.isLoggedIn_var == 'true'){

                return true;
              }else{


                return false;
              }
  }
 
 }    
  

