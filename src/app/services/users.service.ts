import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { EndPoints, HEADERS } from '../models/static-values';
import { User } from '../models/user';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _user = new BehaviorSubject<User>({} as User);

  constructor(private httpClient: HttpClient, private jwtHelper : JwtHelperService,
    private modal : ModalService, private router : Router) { 

    }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  public login(user : User): any {
    return this.httpClient.post<User>(EndPoints.LOGIN, user, {
      headers: HEADERS
    });
  };

  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  }

  //Inset row in the table
  register(user: User): Observable<number> {
    return this.httpClient.post<any>(EndPoints.REGISTER, user);
  }
  
  sendRecoveryMail(mail: string): Observable<number> {
    return this.httpClient.post<any>(EndPoints.RECOVERY_PASSWORD, mail);
  }
  
}
