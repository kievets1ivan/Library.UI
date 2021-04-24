import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '../../services/auth.service';
import { JWTService } from '../../services/jwt.service';
import { UserResponse } from '../../models/user/user-response';
import { UserRoles } from '../../enums/user-roles';
import { UserAuthModel } from '../../models/user/user-auth-model';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {

  private user: UserAuthModel = {
    login: '',
    password: ''
  };

  @Input() requiredRole = UserRoles.Basic;

  public signInFormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private cookie: CookieService,
    private jwtService: JWTService,
    private router: Router,
  ) { }

  public isInvalid(id: string): boolean {
    return (this.signInFormGroup.get(id).touched && this.signInFormGroup.get(id).invalid);
  }

  public onSubmit(): void {
    this.user.login = this.signInFormGroup.get('login').value;
    this.user.password = this.signInFormGroup.get('password').value;

    this.authService.signIn(this.user).subscribe((response: UserResponse) => {
      if (response.isSuccess) {
        this.jwtService.setToken(this.cookie.get('Token'));
        if (this.jwtService.getUserRole() === this.requiredRole || this.jwtService.getUserRole() === UserRoles.Admin) {
          this.router.navigate(['home']);
        }
        else {
          this.cookie.delete('Token', '/');
        }
      }
      else {
        if (response.errorCode === 1) {
          this.signInFormGroup.get('login').setErrors({ invalidLogin: true });
        }
        else if (response.errorCode === 2) {
          this.signInFormGroup.get('password').setErrors({ invalidPassword: true });
        }
        else {
          console.log('auth failed (cookie problems or unknown)');
        }
      }
    },
      exception => {
        console.log(exception);
      });
  }

  public logout(): void {
    return this.authService.logout();
  }
}
