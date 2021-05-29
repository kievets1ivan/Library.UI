import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PopupService, User, UserService } from '@lib/common';
import { DataService } from './../../../../data-services/data.service';

@Component({
  selector: 'library-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() public user: User;
  public userInitialState: User;
  public isSubmitClicked = false;

  public userFormGroup = this._fb.group({
    lastName: [''],
    firstName: [''],
    patronymic: [''],
    phone: ['', [Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]],
  })

  constructor(
    private _fb: FormBuilder,
    private _popupService: PopupService,
    public userService: UserService,
    private dataService: DataService,
  ) { }

  public ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
      this.userInitialState = Object.assign({}, user);

      if (!this.user) { return; }

      this.userFormGroup.patchValue({
        lastName: this.user.lastName,
        firstName: this.user.firstName,
        patronymic: this.user.patronymic,
        phone: this.user.phoneNumber,
      })
    });
  }

  public isInvalid(field: string): boolean {
    return (this.isSubmitClicked && this.userFormGroup.get(field).invalid);
  }

  public onSubmit(): void {
    this.isSubmitClicked = true;

    if (this.userFormGroup.valid) {
      this.user.lastName = this.userFormGroup.get('lastName').value;
      this.user.firstName = this.userFormGroup.get('firstName').value;
      this.user.patronymic = this.userFormGroup.get('patronymic').value;
      this.user.phoneNumber = this.userFormGroup.get('phone').value;

      if (this.isUserChanged()) {
        this.userService.updateUser(this.user).subscribe((user: User) => {
          this._popupService.open('USER').afterClosed().subscribe(() => {
            this.isSubmitClicked = false;
          })

          this.user = user;
          this.userInitialState = Object.assign({}, user);
          this.dataService.emitChange();
        },
          err => {
            if (err.error.startsWith('System.Exception: duplicate login')) {
              this._popupService.open('DUPLICATE_LOGIN', 'assets/images/unnice/unnice.svg');
            } else {
              this._popupService.open('UNKNOWN_ERROR', 'assets/images/unnice/unnice.svg');
            }
          })
      }
    }
  }

  private isUserChanged(): boolean {
    return this.user.lastName !== this.userInitialState.lastName
      || this.user.firstName !== this.userInitialState.firstName
      || this.user.patronymic !== this.userInitialState.patronymic
      || this.user.phoneNumber !== this.userInitialState.phoneNumber;
  }

}
