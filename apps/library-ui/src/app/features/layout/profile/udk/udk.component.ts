import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService, PaginationComponent, PaginationService, Udk, UdkService } from '@lib/common';

@Component({
  selector: 'library-udk',
  templateUrl: './udk.component.html',
  styleUrls: ['./udk.component.scss'],
  providers: [PaginationService]
})
export class UdkComponent implements OnInit, AfterViewInit {

  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent<Udk>;

  public retrievedUdks: Udk[];

  private destroyed$: Subject<void> = new Subject<void>();

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    public udkService: UdkService,
    public authService: AuthService,
    public paginationService: PaginationService<Udk>,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.getUdks();
  }

  public ngAfterViewInit(): void {
    this.paginationComponent.applyPaging();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private getUdks(): void {
    this.paginationService.data.pipe(
      takeUntil(this.destroyed$))
      .subscribe((udks: Udk[]) => {
        this.retrievedUdks = udks;
      });
  }
}
