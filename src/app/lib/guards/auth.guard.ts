import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let guardObsv  =this.authService.userState$
      .pipe(
        map((value)=> {
          if(value) return true;
          else {
          
            this.router.navigate(['login/']);
    
            return false;
          } 
    
        })
      )
      return guardObsv;
  }
  

}
