import { Component } from '@angular/core';

const datesStr = `dates = {
  single: new Date(),
  multiple: ['2001-01-01', '12-12-2002']
}`;

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
    multiple: ['2001-01-01', '12-12-2002']
  };

  // String demos
  demos = {
    dates: datesStr,
    single: '{{dates.single | dateInterval}}',
    multiple: '{{dates.multiple | dateInterval}}',
    single_options: "{{dates.single | dateInterval:'mediumDate':'backward'}}",
    localized: {
      fr_simple: "{{dates.multiple | dateInterval:'mediumDate':'forward':'fr-FR'}}",
      ru_simple: "{{dates.multiple | dateInterval:'mediumDate':'forward':'ru-RU'}}",
      ru_dateFormat: "{{dates.multiple | dateInterval:'dd MMMM y':'forward':'ru-RU'}}"
    }
  };
}
