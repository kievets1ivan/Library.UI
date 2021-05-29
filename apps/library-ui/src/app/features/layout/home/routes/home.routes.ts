import { Routes } from '@angular/router';

import { HomeComponent } from '../home.component';
import { SectionListComponent } from './../section-list/section-list.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'sections',
        component: SectionListComponent,
      },
    ]
  }
];
