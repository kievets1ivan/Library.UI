import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, PopupService, QuestionAnswer, QuestionAnswerService } from '@lib/common';
import { switchMap } from 'rxjs/operators';
import { isNil } from 'lodash-es';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'library-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.scss']
})
export class OpenQuestionComponent implements OnInit {

  public question: QuestionAnswer;
  public isSubmitClicked = false;

  public answerFormGroup = this.fb.group({
    answer: [''],
  });

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    public questionAnswerService: QuestionAnswerService,
    private popupService: PopupService,
  ) { }

  ngOnInit() {
    this.getQuestion();
  }

  public getQuestion(): void {

    this.activateRoute.params.pipe(switchMap(params => {

      const documentId = params['id'];

      if (!isNil(documentId)) {
        return this.questionAnswerService.getQuestionAnswerById(params['id']);
      }

      return of();
    }))
      .subscribe((questionAnswer: QuestionAnswer) => {
        this.question = questionAnswer;
      });
  }

  public isInvalid(field: string): boolean {
    return (this.isSubmitClicked && this.answerFormGroup.get(field).invalid);
  }

  @HostListener('keydown.enter', ['$event'])
  public onClick(): void {
    this.isSubmitClicked = true;

    if (this.answerFormGroup.valid) {
      this.question.answer = this.answerFormGroup.get('answer').value;

      this.questionAnswerService.updateQuestion(this.question).subscribe((updatedQuestion: QuestionAnswer) => {
        this.popupService.open('ANSWER').afterClosed().subscribe(() => {
          this.answerFormGroup.reset();
          this.isSubmitClicked = false;
        });

        this.question = updatedQuestion;
      });
    }
  }

}
