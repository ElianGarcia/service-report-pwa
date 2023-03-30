import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  incrementValue = 1;

  constructor(private userService : UsersService, private snack : MatSnackBar) { }

  ngOnInit(): void {
    this.incrementValue = this.userService.getIncrementValue();
  }

  save(){
    if(this.incrementValue < 0.10){
      this.incrementValue = 0.10;
    }

    this.userService.setIncrementValue(this.incrementValue);
    this.snack.open("Settings saved", "OK", {duration: 1000});
  }
}
