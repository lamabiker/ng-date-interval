import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDateIntervalModule } from 'projects/ng-date-interval/src/public-api';

import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

registerLocaleData(localeFr, 'fr-FR');
registerLocaleData(localeRu, 'ru-RU');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NgDateIntervalModule,
    MatCardModule,
    HighlightModule,
    MatDividerModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
