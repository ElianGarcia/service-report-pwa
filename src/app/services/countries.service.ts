import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/country';
import { EndPoints } from '../models/static-values';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  _countries = new BehaviorSubject<Country[]>([]);

  constructor(private httpClient : HttpClient) { }
  
  public getCountries() : any {
    this.httpClient.get<Country[]>(EndPoints.GETCOUNTRIES).subscribe(data => {
      this._countries.next(data);
    }, error => {
      
    })

    return this._countries.asObservable();
  };
}
