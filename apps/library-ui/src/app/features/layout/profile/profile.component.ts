import { Component, OnInit } from '@angular/core';

import { User, UserService } from '@lib/common';
import { DataService } from '../../../data-services/data.service';

@Component({
  selector: 'library-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(
    public userService: UserService,
    private dataService: DataService,
  ) { }

  public ngOnInit(): void {
    this.getUser();

    this.dataService.changeEmitted$.subscribe(() => {
      this.getUser();
    })
  }

  private getUser(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }

}
