import { Component } from '@angular/core';
import { AuthService } from '@lib/common';

@Component({
  selector: 'library-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {

  constructor(
    private authService: AuthService,
  ) { }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedInAndTokenAlive;
  }
}
