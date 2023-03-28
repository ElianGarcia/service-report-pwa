import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  incrementValue = 1;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.incrementValue = this.userService.getIncrementValue();
  }

  save(){
    if(this.incrementValue < 0.10){
      this.incrementValue = 0.10;
    }

    this.userService.setIncrementValue(this.incrementValue);
  }
}
