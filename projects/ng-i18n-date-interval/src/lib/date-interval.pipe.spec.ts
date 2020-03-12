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

  it('should disgard same month/year when format specified', () => {
    const dates = [new Date('2019-05-06'), new Date('2019-05-11')];
    const result = sut.transform(dates, 'backward', 'dd MMMM y');
    expect(result).toEqual(`From 06 May 2019 to 11 May 2019`);
  });

  it('should handle same year with single value', () => {
    const dates = [new Date('2019-05-06')];
    const result = sut.transform(dates);
    expect(result).toEqual(`Since May 6, 2019`);
  });
});
