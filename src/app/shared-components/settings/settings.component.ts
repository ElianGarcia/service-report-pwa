import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  incrementValue = 1;
  siteLanguage = 'English';
  language = {code: 'en', label: 'English'};

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
  ];

  constructor(private userService : UsersService,
    private snack : MatSnackBar, private translate: TranslateService) { }

  ngOnInit(): void {
    this.incrementValue = this.userService.getIncrementValue();

    //set the language to the one saved in the service
    this.language = localStorage.getItem('language') === 'en' 
      ? this.languageList[0] : this.languageList[1];
  }

  save(){
    if(this.incrementValue < 0.10){
      this.incrementValue = 0.10;
    }

    this.userService.setIncrementValue(this.incrementValue);
    this.snack.open("Settings saved", "OK", {duration: 1000});
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
      localStorage.setItem('language', localeCode);
    }
  }
}
