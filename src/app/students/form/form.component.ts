import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Placement } from 'src/app/models/placement';
import { Student } from 'src/app/models/student';
import { ModalService } from 'src/app/services/modal.service';
import { PlacementsService } from 'src/app/services/placements.service';
import { StudentService } from 'src/app/services/student.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public mainForm: FormGroup;
  placements: Placement[] = [];
  student: Student;
  mode: string = 'Create';

  days = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
  ];

  constructor(
    private studentsService: StudentService,
    public formBuilder: FormBuilder,
    public modalService: ModalService,
    private placementsService: PlacementsService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.studentsService.getStudents().subscribe(students => {
        this.student = students.find(x => x.studentId == id);
        this.mode = this.student ? 'Edit' : 'Create';

        if (this.student) {
          this.mainForm.patchValue(this.student);
        }
      });
    });
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      studentId: [0, Validators.required],
      name: ['', Validators.required],
      phone: [''],
      placementId: ['', Validators.required],
      address: ['', Validators.required],
      active: [true, Validators.required],
      dayToVisit: ['', Validators.required],
      observations: [''],
      userId: [0, Validators.required]
    })

    this.mainForm.patchValue({
      userId: this.userService.getUser().userId,
    })

    this.placementsService.getPlacements().subscribe({
      next: (res) => this.placements = res
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
    if (!this.mainForm.valid) {
      this.modalService.showMessage('Please fill all the required fields!');
      return;
    }

    if (this.student) {
      this.studentsService.update(this.mainForm.value).subscribe({
        next: data => {
          if (data > 0)
            this.modalService.showMessage('Student updated!');
          this.router.navigate(['/students']);
        }, 
        error: (error) => {
          this.modalService.showMessage('An error occured while updating the student!')
        }
      });
    }
    else {
      this.studentsService.save(this.mainForm.value).subscribe({
        next: data => {
          if (data > 0)
            this.modalService.showMessage('Student saved!');
          this.router.navigate(['/students']);
        }, error: (error) => {
          this.modalService.showMessage('An error occured while saving the student!')
        }
      })
    }
  }

  deleteStudent(id) {
    if (!id) {
      this.modalService.showMessage('An error occured while deleting the student!');
      return;
    }

    if (this.modalService.showConfirmMessage('Are you sure you want to delete this student?')) {
      this.studentsService.delete(id).subscribe(data => {
        this.modalService.showMessage('Student deleted!');
      })
    }
  }
}
