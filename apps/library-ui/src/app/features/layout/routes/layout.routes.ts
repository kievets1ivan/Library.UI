import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'main'
      },
      {
        path: 'main',
        loadChildren: () => import('./../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'services',
        loadChildren: () => import('./../services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./../search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./../profile/profile.module').then((m) => m.ProfileModule),
      },
      // {
      //   path: '**',
      //   redirectTo: 'main'
      // }
    ]
  }
];
