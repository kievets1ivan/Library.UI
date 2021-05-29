import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  PopupComponent,
]

const MODULES = [
  CommonModule,
  MatDialogModule,
  TranslateModule.forChild(),
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class PopupModule { }
