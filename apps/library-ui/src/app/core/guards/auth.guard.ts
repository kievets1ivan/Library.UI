import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService, JWTService } from '@lib/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private jwt: JWTService,
  ) { }

  public canActivate(): boolean {
    if (this.authService.isLoggedIn && !this.jwt.isTokenExpired) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
