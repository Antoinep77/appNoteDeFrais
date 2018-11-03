import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNdfComponent } from './show-ndf.component';

describe('ShowNdfComponent', () => {
  let component: ShowNdfComponent;
  let fixture: ComponentFixture<ShowNdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
