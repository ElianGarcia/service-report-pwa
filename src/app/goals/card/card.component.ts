import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() values: any;

  constructor() {}

  ngOnInit() {
    if (this.title === 'Hours') {
      let startMinutes = Math.floor(this.values.actual.toFixed(2) * 60);

      if(startMinutes > 0){
        let endMinutes = Math.floor(this.values.goal.toFixed(2) * 60);

      // subtract end time from start time
      let diffMinutes = endMinutes - startMinutes;

      // calculate hours from difference in minutes
      let hours = Math.floor(diffMinutes / 60);

      //calculate minutes 
      const decimalPart = this.values.actual - Math.floor(this.values.actual); // get the decimal part of the number
      let minutes = (0.60 - decimalPart);
      minutes = Math.round(minutes * 100);

      // format result as a string
      let result = hours + '.' + (minutes < 10 ? '0' : '') + minutes;
      this.values.remaining = result;
      }
      else
        this.values.remaining = this.values.goal

      this.values.actual = this.values.actual.toFixed(2);
    }
  }

  overcomed() {
    return this.values.remaining < 1;
  }
}
