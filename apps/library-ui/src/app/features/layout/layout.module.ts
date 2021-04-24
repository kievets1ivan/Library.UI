import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './routes/layout-rounting.module';

const MODULES = [
  CommonModule,
  LayoutRoutingModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }
