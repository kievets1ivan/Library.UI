import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CommonLibraryModule } from '@lib/common';
import { UiModule } from '@lib/ui';

import { SearchRoutingModule } from './routes/search-routing.module';
import { SearchComponent } from './search.component';

const MODULES = [
  CommonModule,
  SearchRoutingModule,
  UiModule,
  CommonLibraryModule,
  TranslateModule.forChild(),
]

const COMPONENTS = [
  SearchComponent,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class SearchModule { }
