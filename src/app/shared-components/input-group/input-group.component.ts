import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {
  @Input() title: string;
  @Input() value: number;
  @Input() min: number = 0;
  @Input() max: number = 125;
  @Output() valueChange = new EventEmitter();

  constructor(private userService : UsersService) { }

  ngOnInit() { }

  get incrementValue() : number {
    return this.userService.getIncrementValue();
  }

  sum(){
    this.value += this.incrementValue;
    this.onChange();
  }
  
  subs(){
    this.value -= this.incrementValue;
    this.onChange();
  }

  onChange() {
    const obj = {
      title: this.title,
      value: this.value
    }

    this.valueChange.emit(obj);
  }
}
