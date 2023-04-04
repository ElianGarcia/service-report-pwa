import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { EndPoints } from '../models/static-values';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class DailyActivityService {
  private authToken = localStorage.getItem('jwt');

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken}`
  });

  requestOptions = { headers: this.headers };
  
  constructor(private httpClient : HttpClient, private userService : UsersService) { }

  get userId () {
    return this.userService.getUser().userId;
  }
    
  public getActivity() : any {
    return this.httpClient.get<Activity>(EndPoints.GETACTIVITIES + this.userId, this.requestOptions);
  };
  
  public getPastActivity(date : string) : any {
    return this.httpClient.get<Activity>(EndPoints.GETPASTACTIVITY + this.userId + '/' + date, this.requestOptions);
  };

  public getActualMonthActivity() : any {
    return this.httpClient.get<Activity[]>(EndPoints.GETACTUALMONTHACTIVITY + this.userId, this.requestOptions);
  };

  //Inset row in the table
  save(activity: Activity) {
    return this.httpClient.post<number>(EndPoints.SAVEACTIVITY, activity, this.requestOptions);
  }

  // Update row with saved row id
  update(activity: Activity) {
    return this.httpClient.put<number>(EndPoints.UPDATEACTIVITY, activity, this.requestOptions);
  }
}