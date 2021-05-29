import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CommonLibraryModule } from '@lib/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './routes/home-routing.module';
import { TopSectionsComponent } from './top-sections/top-sections.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionComponent } from './section/section.component';

const MODULES = [
  CommonModule,
  HomeRoutingModule,
  CommonLibraryModule,
]

const COMPONENTS = [
  HomeComponent,
  TopSectionsComponent,
  SectionListComponent,
  SectionComponent,
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
