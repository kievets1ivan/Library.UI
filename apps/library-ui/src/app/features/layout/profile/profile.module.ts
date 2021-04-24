import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './routes/profile-routing.module';

const MODULES = [
  CommonModule,
  ProfileRoutingModule,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ProfileComponent,
  ]
})
export class ProfileModule { }
