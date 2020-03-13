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

  it('should take a single date in an array', () => {
    const dates = [new Date('2019-05-06')];
    const result = sut.transform(dates);
    expect(result).toEqual('Since May 6, 2019');
  });

  it('should take a single date', () => {
    const dates = new Date('2019-05-06');
    const result = sut.transform(dates);
    expect(result).toEqual('Since May 6, 2019');
  });

  it('should take an array with a date and a null value', () => {
    const dates = [new Date('2019-05-06'), null];
    const result = sut.transform(dates);
    expect(result).toEqual('Since May 6, 2019');
  });

  it('should take an array with a date, a null value and a backward outlook', () => {
    const dates = [new Date('2019-05-06'), null];
    const result = sut.transform(dates, 'backward');
    expect(result).toEqual('Until May 6, 2019');
  });

  it('should not fail if given null', () => {
    const dates = null;
    const result = sut.transform(dates);
    expect(result).toEqual('');
  });

  it('should not fail if given an array with null values', () => {
    const dates = [null, null];
    const result = sut.transform(dates);
    expect(result).toEqual('');
  });

  it('should take a single date and accept default direction option', () => {
    const dates = [new Date('2019-05-06')];

    const result2 = sut.transform(dates);
    expect(result2).toEqual('Since May 6, 2019');
  });

  it('should take a single date and accept backward direction option', () => {
    const dates = [new Date('2019-05-06')];

    const result1 = sut.transform(dates, 'backward');
    expect(result1).toEqual('Until May 6, 2019');
  });

  it('should handle locale when specified', () => {
    const dates = [new Date('2019-05-06')];
    const format = 'mediumDate';
    const result = sut.transform(dates, 'backward', format, 'fr-FR');
    expect(result).toEqual(`Jusqu'au 6 mai 2019`);
  });

  it('should handle same year', () => {
    const dates = [new Date('2019-05-06'), new Date('2019-06-06')];
    const result = sut.transform(dates);
    expect(result).toEqual(`From May 6 to Jun 6, 2019`);
  });

  it('should handle same month', () => {
    const dates = [new Date('2019-05-06'), new Date('2019-05-11')];
    const result = sut.transform(dates);
    expect(result).toEqual(`From 6 to May 11, 2019`);
  });

  it('should handle same year with single value', () => {
    const dates = [new Date('2019-05-06')];
    const result = sut.transform(dates);
    expect(result).toEqual(`Since May 6, 2019`);
  });

  it('should handle same year with specified format (no days)', () => {
    const dates = [new Date('2019-05-06'), new Date('2019-06-06')];
    const result = sut.transform(dates, 'forward', 'MMM y');
    expect(result).toEqual(`From May to Jun 2019`);
  });

  it('should handle same year with specified format (leading zero days)', () => {
    const dates = [new Date('2019-05-06'), new Date('2019-06-06')];
    const result = sut.transform(dates, 'forward', 'dd MMM y');
    expect(result).toEqual(`From 06 May to 06 Jun 2019`);
  });

  it('should handle same year and same month with specified format (no days)', () => {
    const dates = [new Date('2019-05-06'), new Date('2019-05-12')];
    const result = sut.transform(dates, 'forward', 'MMM y');
    expect(result).toEqual(`May 2019`);
  });
});
