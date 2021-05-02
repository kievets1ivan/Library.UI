import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CommonLibraryModule } from '@lib/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './routes/home-routing.module';
import { TopSectionsComponent } from './top-sections/top-sections.component';

const MODULES = [
  CommonModule,
  HomeRoutingModule,
  CommonLibraryModule,
]

const COMPONENTS = [
  HomeComponent,
  TopSectionsComponent,
]

@NgModule({
  imports: [
    ...MODULES,
    TranslateModule.forChild(),
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class HomeModule { }
