import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpHeaderComponent } from './pvp-header.component';

describe('PvpHeaderComponent', () => {
  let component: PvpHeaderComponent;
  let fixture: ComponentFixture<PvpHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
