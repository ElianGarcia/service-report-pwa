import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { EndPoints } from '../models/static-values';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class DailyActivityService {
  constructor(private httpClient : HttpClient, private modal : ModalService) { }
    
  public getActivity() : any {
    return this.httpClient.get<Activity>(EndPoints.GETACTIVITIES + 1);
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