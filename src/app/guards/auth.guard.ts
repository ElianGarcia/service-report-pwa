import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ModalService } from '../services/modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router,
    private modal: ModalService) { }
  
  canActivate() {
    //get the jwt token which are present in the local storage
    const token = localStorage.getItem("jwt");

    //Check if the token is expired or not and if token is expired then redirect to login page and return false
    if (token && !this.jwtHelper.isTokenExpired(token)){
      console.log("Token is not expired");
      return true;
    }

    this.router.navigate(["login"]);
    //this.modal.showMessage("You are not authorized to access this page!");
    console.log("Token is expired");
    return false;
  }
  
}
