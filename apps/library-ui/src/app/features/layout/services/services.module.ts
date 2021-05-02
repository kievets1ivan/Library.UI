import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ServicesRoutingModule } from './routes/services-routing.module';
import { UdkComponent } from './udk/udk.component';
import { QuestionComponent } from './question/question.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';

const MODULES = [
  CommonModule,
  ServicesRoutingModule,
  TranslateModule.forChild(),
]

const COMPONENTS = [
  QuestionComponent,
  UdkComponent,
  PublicationsComponent,
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
