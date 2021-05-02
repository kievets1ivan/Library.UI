import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './components/header/header.module';
import { InputModule } from './components/input/input.module';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  HeaderModule,
  InputModule,
]

const MATMODULES = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
]

@NgModule({
  imports: [
    ...MODULES,
    ...MATMODULES,
  ],
  exports: [
    ...MODULES,
    ...MATMODULES,
  ]
})
export class UiModule { }
