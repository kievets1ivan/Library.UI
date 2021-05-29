import { Component, Input, OnInit } from '@angular/core';
import { AuthService, QuestionAnswer } from '@lib/common';

@Component({
  selector: 'library-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  @Input() question: QuestionAnswer;

  public get isAdmin() {
    return this.authService.getUserRole() === 'Admin' ? true : false;
  }

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

}
