import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpPlatformHeaderComponent } from './pvp-platform-header.component';

describe('PvpPlatformHeaderComponent', () => {
  let component: PvpPlatformHeaderComponent;
  let fixture: ComponentFixture<PvpPlatformHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpPlatformHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpPlatformHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
