import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PopupService, QuestionAnswer, QuestionAnswerService } from '@lib/common';

const MAX_QUESTION_LENGTH = 200;

@Component({
  selector: 'library-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public questionAnswer: QuestionAnswer = {
    question: '',
  };
  public maxLength: number;
  public isSubmitClicked = false;

  public questionFormGroup = this._fb.group({
    question: ['', [Validators.required]]
  })

  constructor(
    private _fb: FormBuilder,
    private _questionAnswerService: QuestionAnswerService,
    private _popupService: PopupService,
  ) { }

  public ngOnInit(): void {
    this.maxLength = MAX_QUESTION_LENGTH;
  }

  public isInvalid(field: string): boolean {
    return (this.isSubmitClicked && this.questionFormGroup.get(field).invalid);
  }

  public onSubmit(): void {
    this.isSubmitClicked = true;

    if (this.questionFormGroup.valid) {
      this.questionAnswer.question = this.questionFormGroup.get('question').value;

      this._questionAnswerService.createQuestionAnswer(this.questionAnswer).subscribe(() => {
        this._popupService.open('QUESTION').afterClosed().subscribe(() => {
          this.questionFormGroup.reset();
          this.isSubmitClicked = false;
        });
      });
    }
  }

}
