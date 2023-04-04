import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { EndPoints } from '../models/static-values';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  private totalRequests = 0;

  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading.next(false);
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    this.requests.splice(i, 1);
    this.loadingService.isLoading.next(this.requests.length > 0);
  }

  isActivityRequest(request: HttpRequest<unknown>) {
    if (request.url.includes(EndPoints.SAVEACTIVITY) || request.url.includes(EndPoints.UPDATEGOAL)) {
      return true;
    }
    return false;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;

    if (this.isActivityRequest(request) === false) {
      this.loadingService.isLoading.next(true);
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.isLoading.next(false);
        }
      })
    );
  }
}
