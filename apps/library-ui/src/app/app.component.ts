import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { AuthService, JWTService } from '@lib/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public headerLibrary = 'HEADER.LIBRARY';

  public navComponent: string = this.headerLibrary;

  constructor(
    private translate: TranslateService,
    private cookie: CookieService,
    private jwt: JWTService,
    private dialog: MatDialog,
    private router: Router,
    public authService: AuthService,
  ) {

    this.jwt.setToken(this.cookie.get('Token'));

    this.translate.addLangs(['en', 'ru', 'ua']);
    this.translate.setDefaultLang('ua');
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|uk|ru/) ? browserLang : 'en');
    // this.translate.use('ru');
  }

  // public getAnimationData(outlet: RouterOutlet): string | null {
  //   return outlet.activatedRouteData.state ? outlet.activatedRouteData.state : null;
  // }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedInAndTokenAlive;
  }

  // public onLogout(): void {
  //   this.sidebarService.isOpened = false;
  //   this.dialog.open(LogoutConfirmationDialogComponent);
  // }
}
