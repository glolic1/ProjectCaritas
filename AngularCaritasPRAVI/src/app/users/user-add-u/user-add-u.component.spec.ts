import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddUComponent } from './user-add-u.component';

describe('UserAddUComponent', () => {
  let component: UserAddUComponent;
  let fixture: ComponentFixture<UserAddUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
