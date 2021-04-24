import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';

const COMPONENTS = [
  HeaderComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class HeaderModule { }
