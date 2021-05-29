import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenUdkComponent } from './open-udk/open-udk.component';
import { UdkComponent } from './udk.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UdkComponent
      },
      {
        path: ':id',
        component: OpenUdkComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdkRoutingModule { }
