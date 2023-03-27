import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { LoadingService } from './services/loading.service';
import { TranslateService } from "@ngx-translate/core";
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Report App';

  constructor(public loadingService: LoadingService, private translate: TranslateService,
    private update : SwUpdate, private onlineStatusService: OnlineStatusService, private router : Router) {
    this.loadingService.isLoading.next(false);

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.router.navigateByUrl('/offline');
    });

    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.updateClient();
  }

  updateClient(){
    this.update.activateUpdate().then(() => document.location.reload());
  }
}
