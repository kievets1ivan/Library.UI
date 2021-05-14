import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionAnswer } from './../models/question-answer/question-answer';
import { environment } from '@lib/environment';

const questionAnswerApiRequest = environment.API.questionAnswer;

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(
    private http: HttpClient,
  ) { }

  public createQuestionAnswer(questionAnswer: QuestionAnswer): Observable<QuestionAnswer> {
    return this.http.post<QuestionAnswer>(`${questionAnswerApiRequest}`, questionAnswer, { withCredentials: true });
  }

}
