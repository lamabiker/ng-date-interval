import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateInterval'
})
export class DateIntervalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Pipe works';
  }

}
