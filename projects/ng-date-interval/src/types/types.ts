export type InputDatesArray = Array<string | Date>;
export type ValidInput = Array<string | Date> | string | Date;
export type DateOutlook = 'backward' | 'forward';
export interface LocaleDateStringOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
}
