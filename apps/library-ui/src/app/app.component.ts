import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { AuthService, JWTService } from '@lib/common';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public headerLibrary = 'HEADER.LIBRARY';
  public headerAuth = 'HEADER.AUTH';
  public headerHome = 'HEADER.HOME';
  public headerServices = 'HEADER.SERVICES';
  public headerSearch = 'HEADER.SEARCH';
  public headerProfile = 'HEADER.PROFILE';
  public headerDocumentDescription = 'HEADER.DOCUMENT_DESCRIPTION';
  public headerSections = 'HEADER.SECTIONS';

  public headerTitle = '';

  constructor(
    private translate: TranslateService,
    private cookie: CookieService,
    private jwt: JWTService,
    private dialog: MatDialog,
    private router: Router,
    public authService: AuthService,
  ) {

    this.jwt.setToken(this.cookie.get('Token'));

    this.translate.addLangs(['en', 'uk']);
    this.translate.setDefaultLang('uk');
    const browserLang = this.translate.getBrowserLang();

    this.translate.use(browserLang.match(/en|uk/) ? browserLang : 'en');
  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

        switch (event.url) {
          case '/':
            this.headerTitle = this.headerLibrary;
            break;
          case '/auth':
            this.headerTitle = this.headerAuth;
            break;
          case '/home':
          case '/home/main':
            this.headerTitle = this.headerHome;
            break;
          case '/home/main/sections':
            this.headerTitle = this.headerSections;
            break;
          default:
            if (event.url.startsWith('/home/services')) {
              this.headerTitle = this.headerServices;
            } else if (event.url.startsWith('/home/search/document')) {
              this.headerTitle = this.headerDocumentDescription;
            } else if (event.url.startsWith('/home/search')) {
              this.headerTitle = this.headerSearch;
            } else if (event.url.startsWith('/home/profile')) {
              this.headerTitle = this.headerProfile;
            }
            break;
        }
      }
    });

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
