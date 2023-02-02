import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { ModalService } from 'src/app/services/modal.service';
import { StudentService } from 'src/app/services/student.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-return-visit-form',
  templateUrl: './return-visit-form.component.html',
  styleUrls: ['./return-visit-form.component.css']
})
export class ReturnVisitFormComponent implements OnInit {
  mainForm: FormGroup;
  student: Student;

  constructor(
    private studentsService: StudentService,
    public formBuilder: FormBuilder,
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.route.params.subscribe(params => {
      let student = params['student'];
      if (student)
        this.student = JSON.parse(student);
    });
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      visitId: ['0', Validators.required],
      studentId: ['', Validators.required],
      notes: [''],
      date: [new Date(), Validators.required],
      userId: [0, Validators.required],
      active: [true, Validators.required]
    })

    this.mainForm.patchValue({
      userId: this.userService.getUser().userId,
    })

    if (this.student)
      this.mainForm.patchValue({
        studentId: this.student.studentId
      })

  }

  public getError(controlName: string): string {
    if (this.mainForm.get(controlName) != null) {
      if (this.mainForm.get(controlName).hasError('required')) {
        return `El campo ${controlName} es obligatorio.`;
      } else if (this.mainForm.get(controlName).hasError('email')) {
        return `El campo ${controlName} debe ser un email válido.`;
      } else if (this.mainForm.get(controlName).hasError('minlength')) {
        return `El campo ${controlName} debe tener como mínimo 8 caracteres.`;
      } else if (this.mainForm.get(controlName).hasError('minlength')) {
        return `El campo ${controlName} debe tener como mínimo 11 caracteres.`;
      }
    }

    return '';
  }

  get errorControl() {
    return this.mainForm.controls;
  }

  submitForm() {
    console.log(this.mainForm);

    if (!this.mainForm.valid) {
      this.modalService.showMessage('Please fill all the required fields!');
      return;
    }

    this.studentsService.visit(this.mainForm.value).subscribe({
      next: data => {
        if (data > 0){
          this.modalService.showMessage('Visit saved!');
          this.router.navigate(['/app/students']);
        }
          
      }, error: error => {
        this.modalService.showMessage('An error occured while saving the visit!')
      }
    })
  }

}
