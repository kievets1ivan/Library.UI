import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { SignInComponent } from './containers/sign-in/sign-in.component';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { CommonLibraryModule } from '@lib/common';
import { UiModule } from '@lib/ui';

const MODULES = [
  CommonModule,
  AuthRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  CommonLibraryModule,
  UiModule,
]

@NgModule({
  imports: [
    ...MODULES,
    TranslateModule.forChild(),
  ],
  declarations: [
    SignInComponent,
  ],
  providers: [
    CookieService
  ]
})
export class AuthModule { }
