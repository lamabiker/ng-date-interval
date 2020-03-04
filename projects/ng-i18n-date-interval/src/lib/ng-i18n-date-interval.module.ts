import { NgModule } from '@angular/core';
import { NgI18nDateIntervalComponent } from './ng-i18n-date-interval.component';
import { DateIntervalPipe } from './date-interval.pipe';



@NgModule({
  declarations: [NgI18nDateIntervalComponent, DateIntervalPipe],
  imports: [
    DateIntervalPipe
  ],
  exports: [
    NgI18nDateIntervalComponent,
    DateIntervalPipe
  ]
})
export class NgI18nDateIntervalModule { }
