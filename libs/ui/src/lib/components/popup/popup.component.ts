import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  public text: string;
  public img: string;

  constructor(
    private dialogRef: MatDialogRef<PopupComponent>,
    public translate: TranslateService,
  ) { }

  public ngOnInit(): void {
    const inputText = this.dialogRef._containerInstance._config.data.componentName;
    const img = this.dialogRef._containerInstance._config.data.img;

    this.text = `POPUP.${inputText}`;
    this.img = img ? img : 'assets/images/nice/nice.svg';
  }

}
