import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { QuestionAnswer, QuestionAnswerService } from '@lib/common';

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

  public questionFormGroup = this.fb.group({
    question: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private questionAnswerService: QuestionAnswerService,
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

      this.questionAnswerService.createQuestionAnswer(this.questionAnswer).subscribe();
    }
  }

}
