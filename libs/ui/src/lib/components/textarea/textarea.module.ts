import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  TextareaComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class TextareaModule { }
