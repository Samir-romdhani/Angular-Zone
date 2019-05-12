import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsPaginationLibComponent } from './rs-pagination-lib.component';

describe('RsPaginationLibComponent', () => {
  let component: RsPaginationLibComponent;
  let fixture: ComponentFixture<RsPaginationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsPaginationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsPaginationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
