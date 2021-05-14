import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Udk, UdkService } from '@lib/common';

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

  public udkFormGroup = this.fb.group({
    title: [''],
    annotation: [''],
  })

  constructor(
    private fb: FormBuilder,
    private udkService: UdkService,
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

      this.udkService.createUdk(this.udk).subscribe();
    }
  }

}
