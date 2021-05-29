import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PopupService, Udk, UdkService } from '@lib/common';

const MAX_ANNOTATION_LENGTH = 350;

@Component({
  selector: 'library-udk',
  templateUrl: './udk.component.html',
  styleUrls: ['./udk.component.scss']
})
export class UdkComponent implements OnInit {

  public udk: Udk = {};
  public maxAnnotationLength: number;
  public isSubmitClicked = false;

  public udkFormGroup = this._fb.group({
    title: [''],
    annotation: [''],
  })

  constructor(
    private _fb: FormBuilder,
    private _udkService: UdkService,
    private _popupService: PopupService,
  ) { }

  public ngOnInit(): void {
    this.maxAnnotationLength = MAX_ANNOTATION_LENGTH;
  }

  public isInvalid(field: string): boolean {
    return (this.isSubmitClicked && this.udkFormGroup.get(field).invalid);
  }

  public onSubmit(): void {
    this.isSubmitClicked = true;

    if (this.udkFormGroup.valid) {
      this.udk.title = this.udkFormGroup.get('title').value;
      this.udk.annotation = this.udkFormGroup.get('annotation').value;

      this._udkService.createUdk(this.udk).subscribe(() => {
        this._popupService.open('UDK').afterClosed().subscribe(() => {
          this.udkFormGroup.reset();
          this.isSubmitClicked = false;
        });
      });
    }
  }

}
