import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints } from '../models/static-values';
import { UsersService } from './users.service';
import { Settings } from '../models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private authToken = localStorage.getItem('jwt');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken}`
  });

  requestOptions = { headers: this.headers };
  
  constructor(private httpClient : HttpClient, 
    private userService : UsersService) { }

  getSettings() {
    return this.httpClient.get<Settings>(EndPoints.GETSETTINGS + this.userService.getUser().userId, this.requestOptions);
  }

  update(settings : Settings) {
    return this.httpClient.put<Settings>(EndPoints.UPDATESETTINGS, settings, this.requestOptions);
  }
}
