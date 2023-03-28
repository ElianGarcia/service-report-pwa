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
  title = 'Service Report Ap';

  constructor(public loadingService: LoadingService, private translate: TranslateService,
    private update: SwUpdate, private onlineStatusService: OnlineStatusService, private router: Router) {
    this.loadingService.isLoading.next(false);

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.router.navigateByUrl('/offline');
    });

    translate.setDefaultLang('en');
    translate.use('en');
    this.updateClient();
  }

  ngOnInit() {
    this.updateClient();
  }

  updateClient() {
    if (this.update.isEnabled) {
      this.update.versionUpdates.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          //log in the console the version that is available and the current version
          console.log("version", this.update.available);
          //log in the console that the update is available
          console.log("Update available");
          //reload the page to load the new version
          window.location.reload();
        }
      });
    }
  }
}
