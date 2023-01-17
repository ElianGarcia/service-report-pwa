import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Goal } from '../models/goal';
import { EndPoints } from '../models/static-values';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  _goal = new BehaviorSubject<Goal>(new Goal());

  constructor(private httpClient : HttpClient, private userService : UsersService) { }
  
  public getGoal(userId : number) : any {
    return this.httpClient.get<Goal>(EndPoints.GETGOALS + userId);
  };
  
  public getProgress() : any {
    let user = this.userService.getUser().userId;
    return this.httpClient.get<Goal[]>(EndPoints.GETPROGRESS + user);
  };

  //Inset row in the table
  save(goal: Goal) {
    return this.httpClient.post<number>(EndPoints.SAVEGOAL, goal);
  }

  // Delete single row 
  delete(item) {
    this.httpClient.delete<Goal>(EndPoints.DELETEGOAL, item);
  }

  // Update row with saved row id
  update(goal: Goal) {
    return this.httpClient.put<number>(EndPoints.UPDATEGOAL, goal);
  }
}