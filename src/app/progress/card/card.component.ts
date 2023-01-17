import { Component, Input, OnInit } from '@angular/core';
import { Months } from 'src/app/models/static-values';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data : any;
  hoursCount : number = 0;
  placementsCount : number = 0;
  videosCount : number = 0;
  returnVisitsCount : number = 0;

  constructor() { }

  ngOnInit() {}

  // getMonth() : string {
  //   return this.data.month ? Months[this.data.month-1] : '';
  // }

  hoursCountStop : any = setInterval(() => {
    this.hoursCount++;

    if(this.hoursCount == this.data.hours) {
      clearInterval(this.hoursCountStop);
    }
  }, 10);
  
  placementsCountStop : any = setInterval(() => {
    this.placementsCount++;

    if(this.placementsCount == this.data.placements) {
      clearInterval(this.placementsCountStop);
    }
  }, 10);
  
  returnVisitsCountStop : any = setInterval(() => {
    this.returnVisitsCount++;

    if(this.returnVisitsCount == this.data.returnVisits) {
      clearInterval(this.returnVisitsCountStop);
    }
  }, 10);
  
  videosCountStop : any = setInterval(() => {
    this.videosCount++;

    if(this.videosCount == this.data.videos) {
      clearInterval(this.videosCountStop);
    }
  }, 10);
}
