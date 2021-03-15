import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _user: UserService, private _router: Router) {}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    console.log('Guard Auth');
    
    return this._user.validateToken().pipe(
      tap( isAuth => {
        if (!isAuth) {
          this._router.navigateByUrl('/login')
        }
      })
    );
  }
  
}
