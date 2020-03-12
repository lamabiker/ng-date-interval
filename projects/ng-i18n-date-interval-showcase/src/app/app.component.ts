import { Component } from '@angular/core';

const datesStr = `{
  single: new Date(),
  multiple: ['2001-01-01', '2002-12-12'],
  sameYear: ['2001-01-01', '2001-03-06'],
  sameMonth: ['2001-01-01', '2001-01-06'],
};`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-i18n-date-interval-showcase';

  // Test subjects
  dates = {
    single: new Date(),
    multiple: ['2001-01-01', '2002-12-12'],
    sameYear: ['2001-01-01', '2001-03-06'],
    sameMonth: ['2001-01-01', '2001-01-06']
  };

  api = '{{ value_expression | dateInterval [ : singleDateOutlook [ : format [ : locale ] ] ] }}';

  // String demos
  demos = {
    dates: datesStr,
    single: '{{dates.single | dateInterval}}',
    multiple: '{{dates.multiple | dateInterval}}',
    sameYear: '{{dates.sameYear | dateInterval}}',
    sameMonth: '{{dates.sameMonth | dateInterval}}',
    single_options: `{{dates.single | dateInterval:'backward'}}`,
    localized: {
      fr_simple: `{{dates.multiple | dateInterval:'forward':'mediumDate':'fr-FR'}}`,
      fr_sameMonth: `{{dates.sameMonth | dateInterval:'forward':'mediumDate':'fr-FR'}}`,
      ru_simple: `{{dates.multiple | dateInterval:'forward':'mediumDate':'ru-RU'}}`,
      ru_dateFormat: `{{dates.multiple | dateInterval:'forward':'dd MMMM y':'ru-RU'}}`
    }
  };
}
