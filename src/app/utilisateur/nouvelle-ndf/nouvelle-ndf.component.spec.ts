simport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleNdFComponent } from './nouvelle-ndf.component';

describe('NouvelleNdFComponent', () => {
  let component: NouvelleNdFComponent;
  let fixture: ComponentFixture<NouvelleNdFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleNdFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleNdFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
