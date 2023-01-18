import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  mainForm: FormGroup;
  invalidLogin = false;

  constructor(private fb: FormBuilder, private modal: ModalService,
    private userService: UsersService, private router : Router) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    })

    if(this.userService.isUserAuthenticated()) {
      this.router.navigateByUrl("");
    }
  }

  reset() {
    this.invalidLogin = false;

    if (!this.mainForm.valid) {
      this.modal.showMessage('Please fill all the fields!');
      return;
    }

    this.userService.login(this.mainForm.value).subscribe(data => {
      console.log(data);
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
