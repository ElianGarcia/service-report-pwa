import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { LoadingService } from './services/loading.service';
import { TranslateService } from "@ngx-translate/core";
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Report App';

  constructor(public loadingService: LoadingService, private translate: TranslateService,
    private update: SwUpdate, private onlineStatusService: OnlineStatusService, private router: Router) {
    this.loadingService.isLoading.next(false);

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.router.navigateByUrl('/offline');
    });

    // translate.use(localStorage.getItem('language') || 'en');
    // console.log('Current language: ' + translate.currentLang);
    this.updateClient();
  }

  ngOnInit() {
    this.updateClient();
  }

  updateClient() {
    if (this.update.isEnabled) {
      this.update.versionUpdates.
        pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
          map(evt => ({
            type: 'UPDATE_AVAILABLE',
            current: evt.currentVersion,
            available: evt.latestVersion,
          }))).subscribe(evt => {
            this.promptUser();
          });
    }
  }

  promptUser() {
    if (confirm('New version available. Load New Version?')) {
      this.update.activateUpdate().then((res) => {
        document.location.reload()
      });
    }
  }
}
