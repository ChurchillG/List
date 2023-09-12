import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduledPage } from './scheduled.page';

describe('ScheduledPage', () => {
  let component: ScheduledPage;
  let fixture: ComponentFixture<ScheduledPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScheduledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
