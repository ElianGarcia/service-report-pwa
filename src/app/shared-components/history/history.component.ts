import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { DailyActivityService } from 'src/app/services/daily-activity.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  activityList: Activity[] = null;

  constructor(private activity: DailyActivityService) { }

  ngOnInit(): void {
    this.activity.getActualMonthActivity().subscribe({
      next: (data) => {
        this.activityList = data;
      }
    });
  }
}
