import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './routes/services-routing.module';

const MODULES = [
  CommonModule,
  ServicesRoutingModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule { }
