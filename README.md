# NgDateInterval

[![codecov](https://codecov.io/gh/lamabiker/ng-i18n-date-interval/branch/master/graph/badge.svg)](https://codecov.io/gh/lamabiker/ng-i18n-date-interval) 
[![Build Status](https://travis-ci.org/lamabiker/ng-date-interval.svg?branch=master)](https://travis-ci.org/lamabiker/ng-date-interval)

This Angular library provides a **pipe** that formats date intervals, given two dates. It does NOT display the time past between the two dates, rather it displays them in a more readable way.

> _From 12 to 14 August, 2020_

> _Until 14 August, 2020_

It takes locale into account too (English, French and Russian currently available).

> _Du 12 au 14 août 2020_

> _С 12 до 14 дек. 2020 г._

## Installation

```sh
npm install ng-date-interval
```

Import the module:
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgDateIntervalModule } from 'ng-date-interval';


@NgModule({
  declarations: [],
  imports: [
    NgDateIntervalModule
  ]
})
export class YourModule { }
```

## Basic usage

```ts
// Component ts
...
date1 = new Date('2020-03-12');
date2 = new Date('2020-03-13');
...
```
```html
<!-- Component html -->
{{ [date1, date2] | dateInterval }}

<!-- From 12 to 13 Mar, 2020 -->
```

## API

```
{{ value_expression | dateInterval [ : singleDateOutlook [ : format [ : locale ] ] ] }}
```

**value_expression** _string_ | _Date_ | _Array<string | date>_ : the input date(s). Can be a date-like string or a Date instance or an array of them. If the array contains more than 2 dates, it will fallback to the first one in the array.

**singleDateOutlook** _string_ 'backward' | 'forward' (default _'forward'_) : in the case of a single date, defines whether that date is a start or an end date (_i.e_ `Until <date>` or `Since <date>`)

**format** _string_ (default _'mediumDate'_): a date format string as used in Angular's [`formatDate`](https://angular.io/api/common/DatePipe#pre-defined-format-options) method. If the format doesn't display the day, but the month and year are the same, it will only display the end date.

**locale** _localestring_ (default _the app's locale, e.g `en-US`_): specify the locale when wanting to display one different from that of the app's. Current locale support: `en`, `fr`, `ru`.

## Contributing

Feel free to fork/fire up Pull Requests! Before you do though, make sure it's:

- passing tests: `ng test`
- covered by tests: `npm run lib:test-coverage`
- passing the linter: `ng lint`

## Issues

Anything missing/wrong? Please [submit an issue](https://github.com/lamabiker/ng-date-interval/issues) 👍

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.
