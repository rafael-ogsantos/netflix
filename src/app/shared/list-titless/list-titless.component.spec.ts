import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitlessComponent } from './list-titless.component';

describe('ListTitlessComponent', () => {
  let component: ListTitlessComponent;
  let fixture: ComponentFixture<ListTitlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTitlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTitlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
