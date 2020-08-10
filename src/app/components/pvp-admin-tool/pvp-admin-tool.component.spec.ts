import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpAdminToolComponent } from './pvp-admin-tool.component';

describe('PvpAdminToolComponent', () => {
  let component: PvpAdminToolComponent;
  let fixture: ComponentFixture<PvpAdminToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpAdminToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpAdminToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
