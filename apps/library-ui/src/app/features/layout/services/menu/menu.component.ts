import { Component, OnInit } from '@angular/core';
import { AuthService } from '@lib/common';

@Component({
  selector: 'library-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
