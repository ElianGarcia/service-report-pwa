import { Component, Input, OnInit } from '@angular/core';
import { Months } from 'src/app/models/static-values';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

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
  studentsCount: number = 0;

  constructor(private snackBar: MatSnackBar, private translate: TranslateService) {

  }

  ngOnInit() {
    this.hoursCount = this.data.hours || 0;
    this.placementsCount = this.data.placements || 0;
    this.videosCount = this.data.videos || 0;
    this.returnVisitsCount = this.data.returnVisits || 0;
    this.studentsCount = this.data.students || 0;
  }

  getMessage(): string {
    let message = '';

    this.translate.get('fieldServiceReport').subscribe((res: string) => {
      message = res.replace('##month', this.getMonth())
        .replace('##hour', this.hoursCount.toString())
        .replace('##placement', this.placementsCount.toString())
        .replace('##video', this.videosCount.toString())
        .replace('##visit', this.returnVisitsCount.toString())
        .replace('##study', this.studentsCount.toString());
    });

    return message;
  }

  getMonth(): string {
    return this.data.month ? Months[this.data.month - 1] : '';
  }

  getLink(): string {
    return `https://wa.me/?text=${this.getMessage()}`;
    //return `whatsapp://send?text=${this.getMessage()}`;
  }

  copyToClipboard() {
    let message = '';
    let month = '';

    this.translate.get(this.getMonth()).subscribe((res: string) => {
      month = res;
    });

    this.translate.get('fieldServiceReport').subscribe((res: string) => {
      message = res.replace('##month', month)
        .replace('##hour', this.hoursCount.toString())
        .replace('##placement', this.placementsCount.toString())
        .replace('##video', this.videosCount.toString())
        .replace('##visit', this.returnVisitsCount.toString())
        .replace('##study', this.studentsCount.toString());

      navigator.clipboard.writeText(message);

      console.log(message);
    });

    let title = '';
    let button = '';

    this.translate.get('Copied').subscribe((res: string) => {
      title = res;

      this.translate.get('Close').subscribe((res: string) => {
        button = res;
        this.snackBar.open(title, button, { duration: 1000 })
      });
    });
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
