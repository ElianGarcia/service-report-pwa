import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) { 
    
  }

  ngOnInit(): void {

  }

  students = () => {
    return this.router.url.includes('students');
  }
  
  goals = () => {
    return this.router.url.includes('goals');
  }

  progress = () => {
    return this.router.url.includes('progress');
  }

  home = () => {
    return this.router.url.includes('home');
  }
}
