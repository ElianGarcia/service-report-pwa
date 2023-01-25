import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
private requests: HttpRequest<any>[] = [];
private totalRequests = 0;

    constructor(private loadingService: LoadingService) { }

    removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        this.requests.splice(i, 1);
        this.loadingService.isLoading.next(this.requests.length > 0);
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.totalRequests++;
      this.loadingService.isLoading.next(true);
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
