import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleNdfComponent } from './handle-ndf.component';

describe('HandleNdfComponent', () => {
  let component: HandleNdfComponent;
  let fixture: ComponentFixture<HandleNdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleNdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleNdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
