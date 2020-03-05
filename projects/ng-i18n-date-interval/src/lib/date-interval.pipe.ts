import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

type inputDates = Array<string | Date> | string | Date;

@Pipe({
  name: 'dateInterval'
})
export class DateIntervalPipe implements PipeTransform {
  input: inputDates;
  singleDateOutlook: 'backward' | 'forward';

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  transform(
    input: inputDates,
    format: string = 'mediumDate',
    singleDateOutlook?: 'backward' | 'forward',
    locale: string = this.locale
  ): string {
    this.input = input;
    this.singleDateOutlook = singleDateOutlook;

    let dateArr = Array.isArray(input) ? input : [];

    if (typeof input === 'string' || input instanceof Date) {
      dateArr = [input, null];
      if (singleDateOutlook === 'backward') dateArr.unshift(dateArr.pop());
    }

    let [startDate, endDate] = dateArr.map(item => (item ? formatDate(item, format, locale) : null));

    let sentences = {
      default: `From ${startDate} to ${endDate}`,
      forward: `Since ${startDate}`,
      backward: `Until ${endDate}`
    };

    return sentences[this.sentence];
  }

  private get sentence(): 'default' | 'forward' | 'backward' {
    if (Array.isArray(this.input)) return 'default';

    return this.singleDateOutlook || 'forward';
  }
}
