import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cronometer',
  templateUrl: './cronometer.component.html',
  styleUrls: ['./cronometer.component.css'],
})
export class CronometerComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: any = 0;
  source = timer(0, 1000);
  clock: any;
  
  constructor() {}

  ngOnInit(): void {
    
  }

  showDate(){
    if((this.seconds+1) == 60){
      if((this.minutes+1) == 60){
        this.hours += 1;
        this.seconds = 0;
        this.minutes = 0;
      }
      else 
      {
        this.minutes += 1;
        this.seconds = 0;
      }
    }
    else
      this.seconds += 1;
  }

  pause () {
    this.clock.unsubscribe();
  }

  play() {
    this.clock = this.source.subscribe(t => {
      this.showDate();
    });
  }

  saveTime() {
    let time = Number(this.hours + '.' + this.minutes);
    console.log(time);

    //prevent to save less than a minute
    //save to the activity service as today activity
    //confirm before saving the time (maybe doing an addition of the current time).
    
  }
}
