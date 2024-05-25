import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseNewPage } from './expense-new.page';

describe('ExpenseNewPage', () => {
  let component: ExpenseNewPage;
  let fixture: ComponentFixture<ExpenseNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
