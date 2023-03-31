import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from '../models/static-values';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  _studentList = new BehaviorSubject<Student[]>([]);

  constructor(private httpClient: HttpClient, private userService: UsersService) { }

  get userId () {
    return this.userService.getUser().userId;
  }

  public getStudents(): any {
    this.httpClient.get<Student[]>(EndPoints.GETSTUDENTS + this.userId).subscribe((data) => {
      this._studentList.next(data);
    })

    return this._studentList.asObservable();
  };
  
  public getStudent(id : number): any {
    return this.httpClient.get<Student>(EndPoints.GETSTUDENT + id+ '/' + this.userId);
  };

  //Inset row in the table
  save(student: Student): Observable<number> {
    return this.httpClient.post<any>(EndPoints.SAVESTUDENT, student);
  }
  
  //Inset row in the table
  visit(visit: any): Observable<number> {
    return this.httpClient.post<number>(EndPoints.VISITSTUDENT, visit);
  }

  // Delete single row 
  delete(item) {
    return this.httpClient.delete<number>(EndPoints.DELETESTUDENT + item)
  }

  // Update row with saved row id
  update(student: Student) {
    return this.httpClient.put<number>(EndPoints.UPDATESTUDENT, student)
  }
}
