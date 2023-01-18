import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.css']
})
export class PasswordForgotComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder, private modal: ModalService,
    private userService: UsersService, private router : Router) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]]
    })
  }

  sendMail() {
    if (!this.mainForm.valid) {
      this.modal.showMessage('Please fill all the fields!');
      return;
    }

    this.userService.sendRecoveryMail(this.mainForm.value).subscribe(data => {
      console.log(data);
      this.modal.showMessage('Email sent successfully!');
      this.router.navigate(["/login"]);
    }, error => {
      console.log(error);
      this.modal.showMessage('Error sending email!');
    })
  }

}
