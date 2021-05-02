import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './routes/layout-rounting.module';
import { LayoutComponent } from './layout.component';

const MODULES = [
  CommonModule,
  LayoutRoutingModule,
  TranslateModule.forChild(),
]

const COMPONENTS = [
  LayoutComponent
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class LayoutModule { }
