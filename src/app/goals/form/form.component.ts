import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Goal } from 'src/app/models/goal';
import { GoalsService } from 'src/app/services/goals.service';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  goal: Goal
  mainForm: FormGroup;

  constructor(private goalService: GoalsService, private modalService: ModalService,
    private fb: FormBuilder, private router: Router,
    private userService: UsersService, private translate: TranslateService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let user = this.userService.getUser().userId;
    this.goalService.getGoal(user).subscribe(res => {
      this.goal = res;
    })
  }

  receiveData($event) {
    switch ($event.title) {
      case 'Hours':
        this.goal.hours = $event.value;
        break;
      case 'Placements':
        this.goal.placements = $event.value;
        break;
      case 'Videos':
        this.goal.videos = $event.value;
        break;
      case 'Return Visits':
        this.goal.returnVisits = $event.value;
        break;
      default:
        break;
    }

    this.save();
  }

  goBack() {
    this.router.navigate(['/app/goals']);
  }

  save() {
    this.mainForm = this.fb.group({
      goalId: [this.goal.goalId, []],
      hours: [this.goal.hours, [Validators.required, Validators.max(150)]],
      placements: [this.goal.placements, [Validators.required]],
      videos: [this.goal.videos, [Validators.required]],
      returnVisits: [this.goal.returnVisits, [Validators.required]],
      userId: [this.goal.userId, [Validators.required]]
    })

    if (!this.mainForm.valid) {
      if (this.mainForm.controls['hours'].invalid) {
        this.translate.get('InvalidHours').subscribe((res: string) => {
          this.modalService.showMessage(res);
        });

        this.goal.hours = 0;
        return;
      }
      else
        this.translate.get('AllFieldsRequired').subscribe((res: string) => {
          this.modalService.showMessage(res);
        });
      return;
    }

    if (this.goal.goalId) {
      this.goalService.update(this.mainForm.value).subscribe(res => {
        //this.modalService.showMessage('Goal updated successfully!');
        //this.goBack();
      })
    }
    else {
      this.goalService.save(this.mainForm.value).subscribe({
        next: data => {

        }
      })
    }
  }
}
