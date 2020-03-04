import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DateIntervalPipe } from '../../../ng-i18n-date-interval/src/lib/date-interval.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DateIntervalPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
