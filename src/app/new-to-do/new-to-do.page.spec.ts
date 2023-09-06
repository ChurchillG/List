import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewToDoPage } from './new-to-do.page';

describe('NewToDoPage', () => {
  let component: NewToDoPage;
  let fixture: ComponentFixture<NewToDoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
