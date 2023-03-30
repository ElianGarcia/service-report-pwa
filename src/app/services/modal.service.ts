import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog,
    private snack : MatSnackBar) {

  }

  public showMessage(message : string) {
    // const dial = this.dialog.open(ModalComponent, ({
    //   width: '250px',
    //   data: { message: message }
    // }));

    this.snack.open(message, 'OK', {duration: 1500});
  }

  public showConfirmMessage(message : string) : Observable<boolean> {
    const dial = this.dialog.open(ModalComponent, ({
      width: '250px',
      data: { message: message }
    }));

    dial.afterClosed().subscribe(res => {
      if (res) {
        return of(true);
      }
      else {
        return of(false);
      }
    });

    return dial.afterClosed();
  }
}
