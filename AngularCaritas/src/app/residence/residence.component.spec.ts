import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceComponent } from './residence.component';

describe('ResidenceComponent', () => {
  let component: ResidenceComponent;
  let fixture: ComponentFixture<ResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
