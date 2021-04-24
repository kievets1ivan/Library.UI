import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './routes/home-routing.module';

const MODULES = [
  CommonModule,
  HomeRoutingModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
