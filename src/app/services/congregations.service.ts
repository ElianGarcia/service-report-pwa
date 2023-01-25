import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Congregation } from '../models/congregation';
import { EndPoints } from '../models/static-values';

@Injectable({
  providedIn: 'root'
})
export class CongregationsService {
  _congregations = new BehaviorSubject<Congregation[]>([]);

  constructor(private httpClient : HttpClient) { }
  
  public getCongregations() : any {
    this.httpClient.get<Congregation[]>(EndPoints.GETCONGREGATIONS).subscribe(data => {
      this._congregations.next(data);
    }, error => {
      
    })

    return this._congregations.asObservable();
  };
}
