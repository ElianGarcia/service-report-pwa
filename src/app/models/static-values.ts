import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export const HEADERS = new HttpHeaders({
    "Content-Type": "application/json"
  });

export const EndPoints = {
    GETSTUDENT: `${environment.api}students/`,
    GETSTUDENTS: `${environment.api}students/`,
    SAVESTUDENT: `${environment.api}students/`,
    VISITSTUDENT: `${environment.api}students/visit/`,
    UPDATESTUDENT: `${environment.api}students/`,
    DELETESTUDENT: `${environment.api}students/`,
    
    GETGOAL: `${environment.api}goals/`,
    GETGOALS: `${environment.api}goals/`,
    SAVEGOAL: `${environment.api}goals/`,
    UPDATEGOAL: `${environment.api}goals/`,
    DELETEGOAL: `${environment.api}goals/`,

    GETPROGRESS: `${environment.api}goals/getProgress/`,
    
    GETACTIVITY: `${environment.api}activity/`,
    GETACTIVITIES: `${environment.api}activity/`,
    GETPASTACTIVITY: `${environment.api}activity/`,
    GETACTUALMONTHACTIVITY: `${environment.api}activity/actualMonth/`,
    SAVEACTIVITY: `${environment.api}activity/`,
    UPDATEACTIVITY: `${environment.api}activity/`,
    DELETEACTIVITY: `${environment.api}activity/`,

    GETPLACEMENTS: `${environment.api}placements/`,

    GETCONGREGATIONS: `${environment.api}congregation/`,

    GETCOUNTRIES: `${environment.api}countries/`,

    LOGIN: `${environment.api}authentication/login/`,
    REGISTER: `${environment.api}users/`,
    RECOVERY_PASSWORD: `${environment.api}authentication/recoveryPassword/`,
    RESET_PASSWORD: `${environment.api}authentication/resetPassword/`,
    
    GETSETTINGS: `${environment.api}settings/`,
    UPDATESETTINGS: `${environment.api}settings/`
}

export const Months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export const Days = { 
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}