import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachVibesComponent } from './beach-vibes.component';

describe('BeachVibesComponent', () => {
  let component: BeachVibesComponent;
  let fixture: ComponentFixture<BeachVibesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachVibesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachVibesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
