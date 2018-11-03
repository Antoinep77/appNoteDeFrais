import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(next.params['idUser']){
        var requestedAuthID = next.params['idUser'];
      }
      if(next.params['idGest']){
        var requestedAuthID = next.params['idGest'];
      }
      if(this.authService.verify(requestedAuthID)){
        return true;
      }
      this.router.navigate(['accueil'])
      
    return false;
  }
}
