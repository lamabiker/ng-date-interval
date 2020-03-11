import { DateIntervalPipe } from './date-interval.pipe';

describe('DateIntervalPipe', () => {
  let sut: DateIntervalPipe;

  beforeEach(() => {
    const locale = 'en-US';
    sut = new DateIntervalPipe(locale);
  });

  it('should take two strings', () => {
    const dates = ['2019-05-06', '2020-03-06'];
    const result = sut.transform(dates);
    expect(result).toEqual('From May 6, 2019 to Mar 6, 2020');
  });

  it('should take two date objects', () => {
    const dates = [new Date('2019-05-06'), new Date('2020-03-06')];
    const result = sut.transform(dates);
    expect(result).toEqual('From May 6, 2019 to Mar 6, 2020');
  });

  it('should take a single date', () => {
    const dates = [new Date('2019-05-06')];
    const result = sut.transform(dates);
    expect(result).toEqual('Since May 6, 2019');
  });

  it('should take a single date and accept direction option', () => {
    const dates = [new Date('2019-05-06')];
    const format = 'mediumDate';

    const result1 = sut.transform(dates, format, 'backward');
    expect(result1).toEqual('Until May 6, 2019');

    const result2 = sut.transform(dates, format, null);
    expect(result2).toEqual('Since May 6, 2019');
  });

  it('should handle locale when specified', () => {
    const dates = [new Date('2019-05-06')];
    const format = 'mediumDate';
    const result = sut.transform(dates, format, 'backward', 'fr-FR');
    expect(result).toEqual("Jusqu'au 6 mai 2019");
  });
});
