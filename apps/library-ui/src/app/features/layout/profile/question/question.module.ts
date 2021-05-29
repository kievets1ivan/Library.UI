import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionComponent } from './question.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionRoutingModule } from './question-routing.module';
import { OpenQuestionComponent } from './open-question/open-question.component';
import { CommonLibraryModule } from '@lib/common';
import { UiModule } from '@lib/ui';

const MODULES = [
  CommonModule,
  QuestionRoutingModule,
  CommonLibraryModule,
  TranslateModule.forChild(),
  UiModule,
]

const COMPONENTS = [
  QuestionComponent,
  QuestionDetailsComponent,
  OpenQuestionComponent,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class QuestionModule { }
