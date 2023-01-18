import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from '../models/goal';
import { GoalsService } from '../services/goals.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goal : Goal = undefined;
  videos : any
  placements : any
  hours : any
  status = "loading";

  constructor(private goalService : GoalsService, private router : Router,
    private userService : UsersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let user = this.userService.getUser().userId;

    this.goalService.getGoal(user).subscribe(res => {
      this.goal = res
      this.assignValues()
    })
  }

  assignValues() {
    this.videos = {
      actual: this.goal.progress.videos,
      goal: this.goal.videos,
      remaining: this.goal.videos - this.goal.progress.videos,
    }
    
    this.placements = {
      actual: this.goal.progress.placements,
      goal: this.goal.placements,
      remaining: this.goal.placements - this.goal.progress.placements,
    }
    
    this.hours = {
      actual: this.goal.progress.hours,
      goal: this.goal.hours,
      remaining: this.goal.hours - this.goal.progress.hours,
    }

    this.status = "loaded";
  }

  edit () {
    this.router.navigate(['/tabs/tab2/goals/1'])
  }

}
