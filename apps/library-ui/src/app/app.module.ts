import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './routes/app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './features/main-screen/main-screen.component';

import { CommonLibraryModule } from '@lib/common';
import { UiModule } from '@lib/ui';

import { environment } from '@lib/environment';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeUa from '@angular/common/locales/uk';

registerLocaleData(localeRu, 'ru');
registerLocaleData(localeUa, 'uk');

const MODULES = [
  CoreModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  MatDialogModule,
  UiModule,
]

const COMPONENTS = [
  AppComponent,
  MainScreenComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES,
    CommonLibraryModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
