import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../models/activity';
import { DailyActivityService } from '../services/daily-activity.service';
import { ModalService } from '../services/modal.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  activity: Activity = new Activity();
  mainForm: FormGroup;

  constructor(private dailyActivity: DailyActivityService, private fb: FormBuilder,
    private modalService: ModalService, private userService: UsersService) {
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  editPastDate($event) {
    this.activity = new Activity();
    this.activity.date = $event;

    var date = new Date(this.activity.date).toISOString();

    this.dailyActivity.getPastActivity(date).subscribe({
      next: (res) => this.activity = res
    })
  }

  getData() {
    this.dailyActivity.getActivity().subscribe({
      next: (res) => this.activity = res,
      
      error: (err) => {
        this.modalService.showMessage('An error occured while getting the data! ' + err.message);
        console.log(err);
      }
    })
}

getDate() : Date {
  return this.activity.date;
}

receiveData($event) {
  switch ($event.title) {
    case 'Hours':
      this.activity.hours = $event.value;
      break;
    case 'Placements':
      this.activity.placements = $event.value;
      break;
    case 'Videos':
      this.activity.videos = $event.value;
      break;
    case 'Revisitas':
      this.activity.returnVisits = $event.value;
      break;
    default:
      break;
  }

  this.save();
}

save() {
  this.mainForm = this.fb.group({
    activityId: [this.activity.activityId, []],
    hours: [this.activity.hours, [Validators.required]],
    placements: [this.activity.placements, [Validators.required]],
    videos: [this.activity.videos, [Validators.required]],
    returnVisits: [this.activity.returnVisits, [Validators.required]],
    userId: [0, [Validators.required]],
    date: [this.activity.date, [Validators.required]]
  })

  this.mainForm.patchValue({
    userId: this.userService.getUser().userId,
  })

  if (!this.mainForm.valid) {
    this.modalService.showMessage('Please fill all the fields!');
    return;
  }

  if (this.activity.activityId) {
    this.dailyActivity.update(this.mainForm.value).subscribe({
      error: (err) => {
        this.modalService.showMessage('An error occured while saving the data! ' + err.message);
        console.log(err);
      }
    });
  }
  else {
    this.dailyActivity.save(this.mainForm.value).subscribe({
      error: (err) => {
        this.modalService.showMessage('An error occured while saving the data! ' + err.message);
        console.log(err);
      }
    });
  }
}

}

