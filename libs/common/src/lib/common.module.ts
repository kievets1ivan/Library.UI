import { UiModule } from '@lib/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SignInFormComponent } from './containers/sign-in/sign-in-form.component';
import { AuthService } from './services/auth.service';
import { JWTService } from './services/jwt.service';

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  UiModule,
]

@NgModule({
  imports: [
    ...MODULES,
    TranslateModule.forChild(),
  ],
  declarations: [
    SignInFormComponent,
  ],
  exports: [
    SignInFormComponent,
  ]
})
export class CommonLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        AuthService,
        JWTService,
      ]
    };
  }
}
