import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public getAnimationData(outlet: RouterOutlet): string | null {
  //   return outlet.activatedRouteData.state ? outlet.activatedRouteData.state : null;
  // }

  // public onLogout(): void {
  //   this.sidebarService.isOpened = false;
  //   this.dialog.open(LogoutConfirmationDialogComponent);
  // }
}
