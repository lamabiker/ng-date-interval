import { Component } from '@angular/core';

const datesStr = `{
  single: [null, new Date()],
  single_forward: [new Date(), null],
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
  title = 'ng-date-interval-showcase';

  // Test subjects
  dates = {
    single: [null, new Date()],
    single_forward: [new Date(), null],
    multiple: ['2001-01-01', '2002-12-12'],
    sameYear: ['2001-01-01', '2001-03-06'],
    sameMonth: ['2001-01-01', '2001-01-06']
  };

  api = '{{ value_expression | dateInterval [ : format [ : locale ] ] ] }}';

  // String demos
  demos = {
    dates: datesStr,
    single: '{{dates.single | dateInterval}}',
    multiple: '{{dates.multiple | dateInterval}}',
    sameYear: '{{dates.sameYear | dateInterval}}',
    sameMonth: '{{dates.sameMonth | dateInterval}}',
    single_forward: `{{dates.single_forward | dateInterval}}`,
    localized: {
      fr_simple: `{{dates.multiple | dateInterval:'mediumDate':'fr-FR'}}`,
      fr_sameMonth: `{{dates.sameMonth | dateInterval:'mediumDate':'fr-FR'}}`,
      ru_simple: `{{dates.multiple | dateInterval:'mediumDate':'ru-RU'}}`,
      ru_dateFormat: `{{dates.multiple | dateInterval:'dd MMMM y':'ru-RU'}}`
    }
  };
}
