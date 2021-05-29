import { Routes } from '@angular/router';

import { InfoComponent } from './../info/info.component';
import { ProfileComponent } from '../profile.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'udks',
        pathMatch: 'full'
      },
      {
        path: 'questions',
        loadChildren: () => import('./../question/question.module').then((m) => m.QuestionModule),
      },
      {
        path: 'udks',
        loadChildren: () => import('./../udk/udk.module').then((m) => m.UdkModule),
      },
      {
        path: 'info',
        component: InfoComponent,
      },
    ]
  }
];
