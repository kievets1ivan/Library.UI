import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { PopupComponent } from '@lib/ui';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private dialog: MatDialog,
  ) { }

  public open(text: string, img?: string): MatDialogRef<PopupComponent, any> {

    const dialogRef = this.dialog.open(PopupComponent, { data: { componentName: text, img: img } });
    dialogRef.afterOpened().subscribe(() => {
      setTimeout(() => {
        dialogRef.close();
      }, 5000)
    })

    return dialogRef;
  }
}
