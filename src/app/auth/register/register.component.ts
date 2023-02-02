import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Congregation } from 'src/app/models/congregation';
import { Country } from 'src/app/models/country';
import { User } from 'src/app/models/user';
import { CongregationsService } from 'src/app/services/congregations.service';
import { CountriesService } from 'src/app/services/countries.service';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mainForm: FormGroup;
  congregations: Congregation[];
  countries: Country[];
  invalidLogin = false;

  constructor(private fb: FormBuilder, private modal: ModalService,
    private userService: UsersService, private router : Router,
    private congregationService: CongregationsService, private countryService: CountriesService) { 
      this.congregationService.getCongregations().subscribe(data => {
        this.congregations = data;
      }, error => {
        console.log(error);
      })

      this.countryService.getCountries().subscribe(data => {
        this.countries = data;
      }, error => {
        console.log(error);
      })
  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      userId: [0, [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      isAdmin: [false, [Validators.required]],
      congregationId: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      active: [true, [Validators.required]]
    })

    if(this.userService.isUserAuthenticated()) {
      this.router.navigateByUrl("");
    }
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

  userExists() : boolean {
    this.userService.login(this.mainForm.value).subscribe(data => { 
      if(data) 
        return true;
      else
        return false;
    }, error => {
      console.log(error);
      return false;
    });

    return false;
  }

  register() {
    this.invalidLogin = false;

    if (!this.mainForm.valid) {
      this.modal.showMessage('Please fill all the fields!');
      return;
    }

    if(this.userExists()) {
      this.modal.showMessage('El usuario ya existe!');
      return;
    }

    this.userService.register(this.mainForm.value).subscribe(data => {
      console.log(data);
      this.modal.showMessage('User registered successfully!');
      this.router.navigate(["auth/login"]);

    }, error => {
      console.log(error);
      this.modal.showMessage('Error registering user!');
    })
  }
}

