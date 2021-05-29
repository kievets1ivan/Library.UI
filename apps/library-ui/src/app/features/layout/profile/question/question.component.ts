import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService, PaginationComponent, PaginationService, QuestionAnswer, QuestionAnswerService } from '@lib/common';

@Component({
  selector: 'library-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent<QuestionAnswer>;

  public retrievedQuestions: QuestionAnswer[];

  private destroyed$: Subject<void> = new Subject<void>();

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    public queastionAnswerService: QuestionAnswerService,
    public authService: AuthService,
    public paginationService: PaginationService<QuestionAnswer>,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.getQuestions();
  }

  public ngAfterViewInit(): void {
    this.paginationComponent.applyPaging();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private getQuestions(): void {
    this.paginationService.data.pipe(
      takeUntil(this.destroyed$))
      .subscribe((questions: QuestionAnswer[]) => {
        this.retrievedQuestions = questions;
      });
  }

}
