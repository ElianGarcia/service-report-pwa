import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { EndPoints } from '../models/static-values';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class DailyActivityService {
  constructor(private httpClient : HttpClient, private userService : UsersService) { }

  get userId () {
    return this.userService.getUser().userId;
  }
    
  public getActivity() : any {
    return this.httpClient.get<Activity>(EndPoints.GETACTIVITIES + this.userId);
  };
  
  public getPastActivity(date : string) : any {
    return this.httpClient.get<Activity>(EndPoints.GETPASTACTIVITY + this.userId + '/' + date);
  };

  public getActualMonthActivity() : any {
    return this.httpClient.get<Activity[]>(EndPoints.GETACTUALMONTHACTIVITY + this.userId);
  };

  //Inset row in the table
  save(activity: Activity) {
    return this.httpClient.post<number>(EndPoints.SAVEACTIVITY, activity);
  }

  // Update row with saved row id
  update(activity: Activity) {
    return this.httpClient.put<number>(EndPoints.UPDATEACTIVITY, activity);
  }
}