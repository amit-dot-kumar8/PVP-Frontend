import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantMonitoringComponent } from './applicant-monitoring.component';

describe('ApplicantMonitoringComponent', () => {
  let component: ApplicantMonitoringComponent;
  let fixture: ComponentFixture<ApplicantMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
