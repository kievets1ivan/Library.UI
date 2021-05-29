import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { UdkComponent } from './udk.component';
import { UdkDetailsComponent } from './udk-details/udk-details.component';
import { OpenUdkComponent } from './open-udk/open-udk.component';
import { UdkRoutingModule } from './udk-routing.module';
import { CommonLibraryModule } from '@lib/common';
import { UiModule } from '@lib/ui';

const MODULES = [
  CommonModule,
  UdkRoutingModule,
  CommonLibraryModule,
  TranslateModule.forChild(),
  UiModule,
]

const COMPONENTS = [
  UdkComponent,
  UdkDetailsComponent,
  OpenUdkComponent,
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class UdkModule { }
