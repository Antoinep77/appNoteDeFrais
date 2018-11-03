import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdfListUsersComponent } from './ndf-list-users.component';

describe('NdfListUsersComponent', () => {
  let component: NdfListUsersComponent;
  let fixture: ComponentFixture<NdfListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdfListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdfListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
