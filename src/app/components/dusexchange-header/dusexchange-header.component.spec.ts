import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DusexchangeHeaderComponent } from './dusexchange-header.component';

describe('DusexchangeHeaderComponent', () => {
  let component: DusexchangeHeaderComponent;
  let fixture: ComponentFixture<DusexchangeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DusexchangeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DusexchangeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
