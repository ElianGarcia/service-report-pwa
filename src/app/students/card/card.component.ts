import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { ModalService } from 'src/app/services/modal.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() student: Student = new Student();

  constructor(private studentService: StudentService,
    private modalService: ModalService, private router: Router) {

  }

  ngOnInit(): void {

  }

  registerReturnVisit () {
    this.router.navigate(['/app/students/return-visit-form', JSON.stringify(this.student)]);
  }

  delete() {
    this.modalService.showConfirmMessage('Are you sure you want to delete this student?').subscribe((value) => {
      console.log(value);
      
      if (!value) {
        return;
      }

      this.studentService.delete(this.student.studentId).subscribe((res) => {
        console.log(res);
        this.modalService.showMessage('Student deleted successfully');
      });
    });
  }
}
