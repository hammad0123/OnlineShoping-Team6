import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalMenComponent } from './traditional-men.component';

describe('TraditionalMenComponent', () => {
  let component: TraditionalMenComponent;
  let fixture: ComponentFixture<TraditionalMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
