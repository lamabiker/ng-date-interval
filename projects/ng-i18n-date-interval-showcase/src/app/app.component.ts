import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-i18n-date-interval-showcase';
  dates = new Date();
  otherDates = ['2001-01-01', '12-12-2002'];
}
