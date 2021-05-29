import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenQuestionComponent } from './open-question/open-question.component';
import { QuestionComponent } from './question.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuestionComponent,
      },
      {
        path: ':id',
        component: OpenQuestionComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
