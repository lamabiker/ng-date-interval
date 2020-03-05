import { Pipe, PipeTransform } from '@angular/core';

type inputDates = Array<string | Date> | string | Date;

@Pipe({
  name: 'dateInterval'
})
export class DateIntervalPipe implements PipeTransform {
  transform(dates: inputDates, ...args: unknown[]): unknown {
    return 'Pipe works';
  }
}
