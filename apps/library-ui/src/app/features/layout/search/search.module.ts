import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './routes/search-routing.module';

const MODULES = [
  CommonModule,
  SearchRoutingModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    SearchComponent,
  ]
})
export class SearchModule { }
