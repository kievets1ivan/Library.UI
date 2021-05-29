import { Component, Input, OnInit } from '@angular/core';
import { AuthService, Udk } from '@lib/common';

@Component({
  selector: 'library-udk-details',
  templateUrl: './udk-details.component.html',
  styleUrls: ['./udk-details.component.scss']
})
export class UdkDetailsComponent implements OnInit {

  @Input() public udk: Udk;

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }

}
