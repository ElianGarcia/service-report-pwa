import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  list: any[] = []

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.goalsService.getProgress().subscribe(res => {
      this.list = res;
    })
  }
}
