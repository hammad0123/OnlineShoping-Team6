import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalWomenComponent } from './traditional-women.component';

describe('TraditionalWomenComponent', () => {
  let component: TraditionalWomenComponent;
  let fixture: ComponentFixture<TraditionalWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
