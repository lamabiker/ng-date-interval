import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DateIntervalPipe } from '../../../ng-date-interval/src/lib/date-interval.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR');
registerLocaleData(localeRu, 'ru-RU');

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, DateIntervalPipe],
        imports: [MatCardModule, HighlightModule, MatDividerModule],
        providers: [
          {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
              coreLibraryLoader: () => import('highlight.js/lib/core'),
              languages: {
                typescript: () => import('highlight.js/lib/languages/typescript'),
                xml: () => import('highlight.js/lib/languages/xml')
              }
            }
          }
        ]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-date-interval-showcase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-date-interval-showcase');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('dateInterval pipe');
  });
});
