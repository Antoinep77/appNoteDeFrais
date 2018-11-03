import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNdfComponent } from './liste-ndf.component';

describe('ListeNdfComponent', () => {
  let component: ListeNdfComponent;
  let fixture: ComponentFixture<ListeNdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeNdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeNdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
