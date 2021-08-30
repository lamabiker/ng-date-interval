import { Pipe, PipeTransform, LOCALE_ID, Inject, Input } from '@angular/core';
import { DatesArray, DateOutlook } from '../types/types';
import { formatDate } from '@angular/common';
import sentences from '../langs';

const defaultDateFormat = 'mediumDate';

@Pipe({
  name: 'dateInterval'
})
export class DateIntervalPipe implements PipeTransform {
  // These are set lower down
  private format: Readonly<string>;
  private normalizedInput: DatesArray;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(input: DatesArray, format: string = defaultDateFormat, locale: string = this.locale): string {
    if (!input) {
      return '';
    }

    // Set class properties
    this.format = format;
    this.locale = locale;

    // Make sure the input isn't longer than 2 elements
    this.normalizedInput = input.slice(0, 2);

    const [startDate, endDate] = this.normalizedInput.map(this.formatDates.bind(this));

    // If the specified format omits the days, but the interval is within
    // the same month and year, return the formatted end date only
    if (this.isSameYear && this.isSameMonth && !this.showDay) {
      return endDate;
    }

    if (!startDate && !endDate) {
      return '';
    }

    return this.interpolate(this.sentence, { startDate, endDate });
  }

  private formatDates(item: Date | string, index: number): string {
    if (!item) {
      return null;
    }

    if (this.isSameYear && index === 0) {
      let format = this.format === 'mediumDate' ? 'MMM d, y' : this.format;

      format = this.removeDateFragment(format, 'y');

      if (this.isSameMonth) {
        format = this.removeDateFragment(format, 'm');
      }

      return formatDate(item, format, this.locale);
    }

    return formatDate(item, this.format, this.locale);
  }

  private interpolate(str: string, args: { [key: string]: string }): string {
    for (const arg of Object.keys(args)) {
      const regEx = new RegExp(`\{${arg}\}`, 'g');
      str = str.replace(regEx, args[arg]);
    }

    return str;
  }

  private removeDateFragment(str: string, key: 'd' | 'm' | 'y'): string {
    const keyRegExp = new RegExp(`${key}`, 'gi');

    return (str = str
      .replace(keyRegExp, '')
      .trim()
      .replace(/^,+/, '')
      .replace(/,+$/, ''));
  }

  // GETTERS

  private get isSameYear(): boolean {
    const date1 = this.normalizedInput[0];
    const date2 = this.normalizedInput[1];

    if (!date1 || !date2) {
      return false;
    }

    const year1 = new Date(date1).getFullYear();
    const year2 = new Date(date2).getFullYear();

    return year1 === year2;
  }

  private get isSameMonth(): boolean {
    const date1 = this.normalizedInput[0];
    const date2 = this.normalizedInput[1];

    const month1 = new Date(date1).getMonth();
    const month2 = new Date(date2).getMonth();

    return month1 === month2;
  }

  private get showDay(): boolean {
    return this.format.toLowerCase().indexOf('d') > -1;
  }

  private get sentence(): string {
    let type: DateOutlook = 'default';

    if (!this.normalizedInput[0]) {
      type = 'backward';
    }
    if (!this.normalizedInput[1]) {
      type = 'forward';
    }

    return sentences[this.locale.substring(0, 2)][type]; // ex: sentences.en.default
  }
}
