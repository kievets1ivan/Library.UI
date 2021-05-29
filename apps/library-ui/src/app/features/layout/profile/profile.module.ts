import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './routes/profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UiModule } from '@lib/ui';

const MODULES = [
  CommonModule,
  ProfileRoutingModule,
  UiModule,
  TranslateModule.forChild(),
]

const COMPONENTS = [
  ProfileComponent,
  InfoComponent,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class ProfileModule { }
