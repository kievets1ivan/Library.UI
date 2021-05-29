import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionAnswer } from './../models/question-answer/question-answer';
import { environment } from '@lib/environment';
import { PaginationQueryParams } from '../models/query-parameters/pagination-query-parameters';
import { PaginationResponse } from '../models/pagination/pagination-response';
import { convertToHttpParams } from '@lib/utils';

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

  public getQuestionAnswers(config: PaginationQueryParams): Observable<PaginationResponse<QuestionAnswer>> {
    const params = convertToHttpParams(config);
    return this.http.get<PaginationResponse<QuestionAnswer>>(`${questionAnswerApiRequest}`, { withCredentials: true, params });
  }

  public getQuestionAnswersForAdmin(config: PaginationQueryParams): Observable<PaginationResponse<QuestionAnswer>> {
    const params = convertToHttpParams(config);
    return this.http.get<PaginationResponse<QuestionAnswer>>(`${questionAnswerApiRequest}/all`, { withCredentials: true, params });
  }

  public getQuestionAnswerById(questionId: number): Observable<QuestionAnswer> {
    return this.http.get<QuestionAnswer>(`${questionAnswerApiRequest}/${questionId}`, { withCredentials: true });
  }

  public updateQuestion(questionToUpdate: QuestionAnswer): Observable<QuestionAnswer> {
    return this.http.put<QuestionAnswer>(`${questionAnswerApiRequest}`, questionToUpdate, { withCredentials: true });
  }

}
