import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mainForm: FormGroup;
  invalidLogin = false;

  constructor(private fb: FormBuilder, private modal: ModalService,
    private userService: UsersService, private router : Router) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    if(this.userService.isUserAuthenticated()) {
      this.router.navigateByUrl("");
    }
  }

  public getError(controlName: string): string {
    if (this.mainForm.get(controlName) != null) {
      if (this.mainForm.get(controlName).hasError('required')) {
        return `The ${controlName} field is mandatory.`;
      }
    }

    return '';
  }


  login() {
    this.invalidLogin = false;

    if (!this.mainForm.valid) {
      this.modal.showMessage('Please fill all the fields!');
      return;
    }

    this.userService.login(this.mainForm.value).subscribe(data => {
      const token = (<any>data).token;
      const user = (<any>data).user;
      localStorage.setItem("jwt", token);
      localStorage.setItem("user", JSON.stringify(user));

      this.invalidLogin = false;
      this.router.navigate([""]);

    }, error => {
      console.log(error);

      if(error.status = 401) {
        this.invalidLogin = true;
      }
    })
  }
}
