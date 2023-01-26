import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() { }

  sum(){
    this.value++;
    this.onChange();
  }
  
  subs(){
    this.value--;
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
