import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {

  }

  public showMessage(message : string) {
    const dial = this.dialog.open(ModalComponent, ({
      width: '250px',
      data: { message: message }
    }));
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
