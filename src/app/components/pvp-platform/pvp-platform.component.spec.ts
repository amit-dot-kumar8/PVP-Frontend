import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpPlatformComponent } from './pvp-platform.component';

describe('PvpPlatformComponent', () => {
  let component: PvpPlatformComponent;
  let fixture: ComponentFixture<PvpPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
