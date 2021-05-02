import { Routes } from '@angular/router';

import { ContactsComponent } from '../contacts/contacts.component';
import { PublicationsComponent } from '../publications/publications.component';
import { QuestionComponent } from '../question/question.component';
import { UdkComponent } from '../udk/udk.component';
import { MenuComponent } from '../menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MenuComponent,
      },
      {
        path: 'question',
        component: QuestionComponent,
      },
      {
        path: 'udk',
        component: UdkComponent,
      },
      {
        path: 'publications',
        component: PublicationsComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
    ]
  }
];
