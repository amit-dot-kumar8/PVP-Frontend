import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DusExchangePlatformComponent } from './dus-exchange-platform.component';

describe('DusExchangePlatformComponent', () => {
  let component: DusExchangePlatformComponent;
  let fixture: ComponentFixture<DusExchangePlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DusExchangePlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DusExchangePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
