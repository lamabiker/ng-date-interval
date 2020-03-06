import { DateIntervalPipe } from './date-interval.pipe';

describe('DateIntervalPipe', () => {
  let sut: DateIntervalPipe;

  beforeEach(() => {
    let locale = 'en-US';
    sut = new DateIntervalPipe(locale);
  });

  it('should take two strings', () => {
    let dates = ['2019-05-06', '2020-03-06'];
    const result = sut.transform(dates);
    expect(result).toEqual('From May 6, 2019 to Mar 6, 2020');
  });

  it('should take two date objects', () => {
    let dates = [new Date('2019-05-06'), new Date('2020-03-06')];
    const result = sut.transform(dates);
    expect(result).toEqual('From May 6, 2019 to Mar 6, 2020');
  });

  it('should take a single date', () => {
    let dates = [new Date('2019-05-06')];
    const result = sut.transform(dates);
    expect(result).toEqual('Since May 6, 2019');
  });

  it('should take a single date and accept direction option', () => {
    let dates = [new Date('2019-05-06')];
    let format = 'mediumDate';

    const result1 = sut.transform(dates, format, 'backward');
    expect(result1).toEqual('Until May 6, 2019');

    const result2 = sut.transform(dates, format, null);
    expect(result2).toEqual('Since May 6, 2019');
  });

  it('should handle locale when specified', () => {
    let dates = [new Date('2019-05-06')];
    let format = 'mediumDate';
    const result = sut.transform(dates, format, 'backward', 'fr-FR');
    expect(result).toEqual("Jusqu'au 6 mai 2019");
  });
});
