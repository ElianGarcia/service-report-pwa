import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Report App';

  constructor(public loadingService: LoadingService) {
    this.loadingService.isLoading.next(false);
  }

  ngOnInit() {
    
  }
}
