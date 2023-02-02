import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Days } from 'src/app/models/static-values';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-return-visits-list',
  templateUrl: './return-visits-list.component.html',
  styleUrls: ['./return-visits-list.component.css']
})
export class ReturnVisitsListComponent implements OnInit {
  student: Student;

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.studentService.getStudent(id).subscribe(data => {
        this.student = data;
      });
    });
  }

  ngOnInit() {

  }

  getDayToVisit() {
    return this.student.dayToVisit ? Days[this.student.dayToVisit] : '';
  }
}
