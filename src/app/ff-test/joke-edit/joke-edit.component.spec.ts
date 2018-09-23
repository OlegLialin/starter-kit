import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeEditComponent } from './joke-edit.component';

describe('JokeEditComponent', () => {
  let component: JokeEditComponent;
  let fixture: ComponentFixture<JokeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
