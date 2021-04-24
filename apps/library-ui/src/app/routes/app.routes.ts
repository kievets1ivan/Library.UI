import { Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { MainScreenComponent } from './../features/main-screen/main-screen.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainScreenComponent,
      },
      {
        path: 'home',
        loadChildren: () => import('./../features/layout/layout.module').then(m => m.LayoutModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('./../features/auth/auth.module').then((m) => m.AuthModule),
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      //   pathMatch: 'full'
      // },
    ]
  }
];
