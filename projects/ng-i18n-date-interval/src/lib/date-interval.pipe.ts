import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';
import sentences from '../langs';

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
    singleDateOutlook: 'backward' | 'forward' = 'forward',
    locale: string = this.locale
  ): string {
    if (Array.isArray(input) && input.length !== 2) input = input[0];

    this.input = input;
    this.singleDateOutlook = singleDateOutlook;

    let dateArr = Array.isArray(input) ? input : [];

    if (typeof input === 'string' || input instanceof Date) {
      dateArr = [input, null];
      if (singleDateOutlook === 'backward') dateArr.unshift(dateArr.pop());
    }

    let [startDate, endDate] = dateArr.map(item => (item ? formatDate(item, format, locale) : null));

    let sentence = sentences[locale.substring(0, 2)][this.sentence];

    return this.interpolate(sentence, { startDate, endDate });
  }

  private interpolate(str: string, args: { [key: string]: string }): string {
    for (let arg in args) {
      let regEx = new RegExp(`\{${arg}\}`, 'g');
      str = str.replace(regEx, args[arg]);
    }

    return str;
  }

  private get sentence(): 'default' | 'forward' | 'backward' {
    if (Array.isArray(this.input)) return 'default';

    return this.singleDateOutlook || 'forward';
  }
}
