import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Settings } from 'src/app/models/settings';
import { SettingsService } from 'src/app/services/settings.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private settings : Settings;
  incrementValue = 1;
  siteLanguage = 'English';
  language = {code: 'en', label: 'English'};

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
  ];

  constructor(private userService : UsersService,
    private snack : MatSnackBar, private translate: TranslateService,
    private settingsService : SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe(
      {
        next: (settings) => {
          console.log(settings);
          this.settings = settings;
          this.incrementValue = this.settings.incrementValue || 1;

          switch(this.settings.language.trim()){
            case 'en':
              this.language = this.languageList[0];
              break;
            case 'es':
              this.language = this.languageList[1];
              break;
          }

        },
        error: (err) => console.log(err)
      })
  }

  save(){
    if(this.incrementValue < 0.10){
      this.incrementValue = 0.10;
    }

    this.settings.incrementValue = this.incrementValue;

    this.settingsService.update(this.settings).subscribe({
      next: (settings) => {
        this.translate.use(this.settings.language);
        localStorage.setItem('language', this.settings.language.trim());
        localStorage.setItem('incrementValue', this.settings.incrementValue.toString());
      }
    });

    this.snack.open("Settings saved", "OK", {duration: 1000}).afterDismissed().subscribe({
      next: () => {
        window.location.reload();
      }
    });
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.settings.language = localeCode;
    }
  }
}
