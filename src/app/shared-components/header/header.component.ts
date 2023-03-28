import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() showEditGoal: boolean = false;
  @Input() showMenu: boolean = true;
  @Input() showAddStudent: boolean = false;
  @Input() showCalendar: boolean = false;
  @Input() showHistory: boolean = false;

  @Input() showBackButton: boolean = false;
  @Input() backRoute: string = '/app/home';
  
  @Output() editingDate = new EventEmitter();

  maxDate = new Date();
  dateSelected = new Date();

  constructor(private userService : UsersService) { }

  ngOnInit(): void {

  }

  logout() {
    this.userService.logOut();
  }

  sendDate() {
    this.editingDate.emit(this.dateSelected);
  }
}
