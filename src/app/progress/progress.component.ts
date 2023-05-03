import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../services/goals.service';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  list: any[] = undefined;

  constructor(private goalsService: GoalsService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.goalsService.getProgress().subscribe((res : Goal[]) => {
      this.list = res;
      let date = new Date();

      if (res[res.length - 1].month < date.getMonth()+1) {
        let goalObject: Goal = new Goal();

        goalObject.goalId = 0;
        goalObject.hours = 0;
        goalObject.placements = 0;
        goalObject.videos = 0;
        goalObject.students = 0;
        goalObject.month = date.getMonth()+1;

        this.list.push(goalObject);
      }
    });
  }
}
