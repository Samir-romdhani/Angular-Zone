import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsChartsC3LibComponent } from './rs-charts-c3-lib.component';

describe('RsChartsC3LibComponent', () => {
  let component: RsChartsC3LibComponent;
  let fixture: ComponentFixture<RsChartsC3LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsChartsC3LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsChartsC3LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
