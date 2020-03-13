import { Pipe, PipeTransform, LOCALE_ID, Inject, Input } from '@angular/core';
import { ValidInput, InputDatesArray, DateOutlook } from '../types/types';
import { formatDate } from '@angular/common';
import sentences from '../langs';

const defautDateFormat = 'mediumDate';
const defaultDateOutlook = 'forward';

@Pipe({
  name: 'dateInterval'
})
export class DateIntervalPipe implements PipeTransform {
  // These are set lower down
  private singleDateOutlook: Readonly<DateOutlook>;
  private format: Readonly<string>;
  private normalizedInput: InputDatesArray;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    input: ValidInput,
    singleDateOutlook: DateOutlook = defaultDateOutlook,
    format: string = defautDateFormat,
    locale: string = this.locale
  ): string {
    // Set class properties
    this.singleDateOutlook = singleDateOutlook;
    this.format = format;
    this.locale = locale;

    // Get array of dates
    this.normalizedInput = this.normalizeInput(input);

    const [startDate, endDate] = this.normalizedInput.map(this.formatDates.bind(this));

    return !startDate && !endDate ? '' : this.interpolate(this.sentence, { startDate, endDate });
  }

  private formatDates(item: Date | string, index: number): string {
    if (!item) {
      return null;
    }

    if (this.format !== defautDateFormat) {
      return formatDate(item, this.format, this.locale);
    }

    if (this.isSameYear && index === 0) {
      const options = { month: 'short', day: 'numeric' };
      if (this.isSameMonth) {
        delete options.month;
      }

      return new Date(item).toLocaleDateString(this.locale, options);
    }

    return formatDate(item, this.format, this.locale);
  }

  private normalizeInput(input: Readonly<ValidInput>): InputDatesArray {
    // If this input isn't an array, make it so
    let inputArr = Array.isArray(input) ? input : [input];

    // Filter out null values
    inputArr = inputArr.filter(i => i);

    if (inputArr.length === 1) {
      inputArr.push(null); // [date, null]

      if (this.singleDateOutlook === 'backward') {
        inputArr.unshift(inputArr.pop()); // [null, date]
      }
    }

    // Make sure the input isn't longer than 2 elements
    return inputArr.slice(0, 2);
  }

  private interpolate(str: string, args: { [key: string]: string }): string {
    for (const arg of Object.keys(args)) {
      const regEx = new RegExp(`\{${arg}\}`, 'g');
      str = str.replace(regEx, args[arg]);
    }

    return str;
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

  private get sentence(): string {
    let type = 'default';

    if (this.normalizedInput.some(el => !el)) {
      type = this.singleDateOutlook;
    }

    return sentences[this.locale.substring(0, 2)][type]; // ex: sentences.en.default
  }
}
