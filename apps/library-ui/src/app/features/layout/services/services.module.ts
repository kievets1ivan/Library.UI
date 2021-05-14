import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UiModule } from '@lib/ui';
import { ServicesRoutingModule } from './routes/services-routing.module';
import { UdkComponent } from './udk/udk.component';
import { QuestionComponent } from './question/question.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';
import { PublicationComponent } from './publications/publication/publication.component';
import { PeriodComponent } from './publications/publication/period/period.component';

const MODULES = [
  CommonModule,
  ServicesRoutingModule,
  TranslateModule.forChild(),
  UiModule,
]

const COMPONENTS = [
  QuestionComponent,
  UdkComponent,
  PublicationsComponent,
  PublicationComponent,
  PeriodComponent,
  ContactsComponent,
  MenuComponent,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class ServicesModule { }
