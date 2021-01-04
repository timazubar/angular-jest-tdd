import {ComponentFixture, TestBed} from '@angular/core/testing';
import {cold} from 'jest-marbles';
import {map} from 'rxjs/operators';

import {SimpleComponent} from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render simple span', () => {
    fixture.detectChanges();
    expect(fixture).toMatchInlineSnapshot(`
      <app-simple>
        <span>
          simple
        </span>
      </app-simple>
    `);
  });

  it('should multiply by two each value emitted', () => {
    const values = { a: 1, b: 2, c: 3, x: 2, y: 4, z: 6};
    const source = cold('-a-b-c-|', values);
    const expected = cold('-x-y-z-|', values);
    const result = source.pipe(map(v => v * 2));
    expect(result).toBeObservable(expected);
  });
});
