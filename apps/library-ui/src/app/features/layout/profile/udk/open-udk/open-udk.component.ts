import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { isNil } from 'lodash-es';
import { AuthService, Udk, UdkService, PopupService } from '@lib/common';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'library-open-udk',
  templateUrl: './open-udk.component.html',
  styleUrls: ['./open-udk.component.scss']
})
export class OpenUdkComponent implements OnInit {

  public udk: Udk;
  public isSubmitClicked = false;

  public answerFormGroup = this.fb.group({
    answer: [''],
  });

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    private activateRoute: ActivatedRoute,
    public udkService: UdkService,
    private fb: FormBuilder,
    private authService: AuthService,
    private popupService: PopupService,
  ) { }

  ngOnInit() {
    this.getUdk();
  }

  public getUdk(): void {

    this.activateRoute.params.pipe(switchMap(params => {

      const documentId = params['id'];

      if (!isNil(documentId)) {
        return this.udkService.getUdkById(params['id']);
      }

      return of();
    }))
      .subscribe((udk: Udk) => {
        this.udk = udk;
      });
  }

  public isInvalid(field: string): boolean {
    return (this.isSubmitClicked && this.answerFormGroup.get(field).invalid);
  }

  @HostListener('keydown.enter', ['$event'])
  public onClick(): void {
    this.isSubmitClicked = true;

    if (this.answerFormGroup.valid) {
      this.udk.udk = this.answerFormGroup.get('answer').value;

      this.udkService.updateUdk(this.udk).subscribe((updatedUdk: Udk) => {
        this.popupService.open('ANSWER').afterClosed().subscribe(() => {
          this.answerFormGroup.reset();
          this.isSubmitClicked = false;
        });

        this.udk = updatedUdk;
      });
    }
  }

}
