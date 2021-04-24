import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  InputComponent,
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
export class InputModule { }
