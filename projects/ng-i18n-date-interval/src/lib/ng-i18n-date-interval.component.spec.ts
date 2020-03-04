import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgI18nDateIntervalComponent } from './ng-i18n-date-interval.component';

describe('NgI18nDateIntervalComponent', () => {
  let component: NgI18nDateIntervalComponent;
  let fixture: ComponentFixture<NgI18nDateIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgI18nDateIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgI18nDateIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
