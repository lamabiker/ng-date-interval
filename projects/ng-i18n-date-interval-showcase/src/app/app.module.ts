import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DateIntervalPipe } from '../../../ng-i18n-date-interval/src/lib/date-interval.pipe';

import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR');
registerLocaleData(localeRu, 'ru-RU');

@NgModule({
  declarations: [AppComponent, DateIntervalPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
