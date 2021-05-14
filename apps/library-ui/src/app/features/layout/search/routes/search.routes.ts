import { Routes } from '@angular/router';

import { DocumentDescriptionComponent } from '@lib/common';
import { SearchComponent } from './../search.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'document/:id',
    component: DocumentDescriptionComponent,
  },
];
