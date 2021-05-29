import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  MatProgressSpinnerModule,
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
