import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ReactiveComponentModule} from '@ngrx/component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {SimpleComponent} from './simple/simple.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SimpleComponent
      ],
      imports: [
        ReactiveComponentModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-jest-tdd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-jest-tdd');
  });

});
