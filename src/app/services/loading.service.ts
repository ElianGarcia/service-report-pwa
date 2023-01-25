import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
    // A BehaviourSubject is an Observable with a default value
    public isLoading = new BehaviorSubject<boolean>(true);

    constructor() {}
}