import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentList: Student[] = new Array<Student>();
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res: Student[]) => {
      this.studentList = res;
    }), (err: any) => {
      console.log(err);
    };
  }

}
