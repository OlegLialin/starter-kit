import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfTestComponent } from './ff-test.component';

describe('FfTestComponent', () => {
  let component: FfTestComponent;
  let fixture: ComponentFixture<FfTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
