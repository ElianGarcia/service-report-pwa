import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Placement } from '../models/placement';
import { EndPoints } from '../models/static-values';

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {
  _placements = new BehaviorSubject<Placement[]>([]);

  constructor(private httpClient : HttpClient) { }
  
  public getPlacements() : any {
    this.httpClient.get<Placement[]>(EndPoints.GETPLACEMENTS).subscribe(data => {
      this._placements.next(data);
    }, error => {
      
    })

    return this._placements.asObservable();
  };
}
