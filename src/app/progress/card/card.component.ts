import { Component, Input, OnInit } from '@angular/core';
import { Months } from 'src/app/models/static-values';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  hoursCount: number = 0;
  placementsCount: number = 0;
  videosCount: number = 0;
  returnVisitsCount: number = 0;

  constructor(private snackBar: MatSnackBar) { 
    
  }

  ngOnInit() { 
    this.hoursCount = this.data.hours || 0;
    this.placementsCount = this.data.placements || 0;
    this.videosCount = this.data.videos || 0;
    this.returnVisitsCount = this.data.returnVisits || 0;
  }

  getMessage(): string {
    let message = `This is my field service report for the month of ${this.getMonth()} \n`;
    message += `*Hours:* ${this.hoursCount} \n`;
    message += `*Placements:* ${this.placementsCount} \n`;
    message += `*Videos:* ${this.videosCount} \n`;
    message += `*Return Visits:* ${this.returnVisitsCount}`;
    
    return message;
  }

  getMonth(): string {
    return this.data.month ? Months[this.data.month - 1] : '';
  }

  getLink(): string {
    return `whatsapp://send?text=${this.getMessage()}`;
  }

  copyToClipboard() {
    let message = `This is my field service report for the month of ${this.getMonth()} \n`;
    message += `*Hours:* ${this.hoursCount} \n`;
    message += `*Placements:* ${this.placementsCount} \n`;
    message += `*Videos:* ${this.videosCount} \n`;
    message += `*Return Visits:* ${this.returnVisitsCount}`;

    navigator.clipboard.writeText(message);

    this.snackBar.open('Copied to clipboard', 'Close', { duration: 1000 })
  }

  // hoursCountStop: any = setInterval(() => {
  //   if (this.data.hours != 0) {
  //     this.hoursCount++;

  //     if (this.hoursCount == this.data.hours) {
  //       clearInterval(this.hoursCountStop);
  //     }
  //   }
  // }, 75);

  // placementsCountStop: any = setInterval(() => {
  //   if (this.data.placements != 0) {
  //     this.placementsCount++;

  //     if (this.placementsCount == this.data.placements) {
  //       clearInterval(this.placementsCountStop);
  //     }
  //   }
  // }, 75);

  // returnVisitsCountStop: any = setInterval(() => {
  //   if (this.data.returnVisits != 0) {

  //     this.returnVisitsCount++;

  //     if (this.returnVisitsCount == this.data.returnVisits) {
  //       clearInterval(this.returnVisitsCountStop);
  //     }
  //   }
  // }, 75);

  // videosCountStop: any = setInterval(() => {
  //   if (this.data.videos != 0) {
  //     this.videosCount++;

  //     if (this.videosCount == this.data.videos) {
  //       clearInterval(this.videosCountStop);
  //     }
  //   }
  // }, 75);
}
