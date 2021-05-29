import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '@lib/ui';
import { UtilsModule } from '@lib/utils';

import { SignInFormComponent } from './containers/sign-in/sign-in-form.component';
import { AuthService } from './services/auth.service';
import { JWTService } from './services/jwt.service';
import { DocumentListComponent } from './containers/documents/document-list/document-list.component';
import { DocumentItemComponent } from './containers/documents/document-item/document-item.component';
import { PaginationComponent } from './containers/pagination/pagination/pagination.component';
import { DocumentService } from './services/document.service';
import { SectionService } from './services/section.service';
import { PaginationService } from './containers/pagination/pagination.service';
import { ImageService } from './services/image.service';
import { QuestionAnswerService } from './services/question-answer.service';
import { UdkService } from './services/udk.service';
import { PublicationPeriodsService } from './services/publication-periods.service';
import { PopupService } from './services/popup.service';
import { DocumentDescriptionComponent } from './containers/documents/document-description/document-description.component';
import { UserService } from './services/user.service';

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  FormsModule,
  UiModule,
  UtilsModule,
]

const COMPONENTS = [
  SignInFormComponent,
  DocumentListComponent,
  DocumentItemComponent,
  DocumentDescriptionComponent,
  PaginationComponent,
]

@NgModule({
  imports: [
    ...MODULES,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class CommonLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        AuthService,
        DocumentService,
        ImageService,
        JWTService,
        PopupService,
        PublicationPeriodsService,
        QuestionAnswerService,
        SectionService,
        UdkService,
        UserService,
        PaginationService,
      ]
    };
  }
}
