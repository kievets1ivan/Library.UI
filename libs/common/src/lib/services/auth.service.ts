import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '@lib/environment';
import { UserAuthModel } from '../models/user/user-auth-model';
import { UserResponse } from '../models/user/user-response';
import { JWTService } from './jwt.service';

const userApiRequest = environment.API.user;

@Injectable()
export class AuthService {
  public succesfullSignIn$ = new Subject();
  constructor(
    private http: HttpClient,
    private router: Router,
    private translate: TranslateService,
    private cookie: CookieService,
    private jwtService: JWTService,
  ) { }

  // public getAuthErrorMessages() {
  //   return {
  //     [UserErrorCode.InvalidLogin]: this.translate.instant('ERROR_MESSAGES.INVALID_LOGIN'),
  //     [UserErrorCode.InvalidPassword]: this.translate.instant('ERROR_MESSAGES.INVALID_PASSWORD')
  //   };
  // }

  // public getRegisterErrorMessages() {
  //   return {
  //     [RegisterErrorCode.DuplicateEmail]: this.translate.instant('ERROR_MESSAGES.EMAIL_IS_TAKEN')
  //   };
  // }

  public getUserRole(): string {
    return this.jwtService.getUserRole();
  }

  public get isLoggedIn(): boolean {
    return !!this.cookie.get('Token');
  }

  public get isLoggedInAndTokenAlive(): boolean {
    return this.isLoggedIn && !this.jwtService.isTokenExpired;
  }

  public logout(): void {
    this.cookie.delete('Token', '/');
    this.router.navigate(['/auth']);
  }

  public signIn(user: UserAuthModel): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${userApiRequest}/signIn`, user, { withCredentials: true });
  }
}
