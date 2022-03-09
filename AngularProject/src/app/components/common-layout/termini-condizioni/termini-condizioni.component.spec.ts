import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminiCondizioniComponent } from './termini-condizioni.component';

describe('TerminiCondizioniComponent', () => {
  let component: TerminiCondizioniComponent;
  let fixture: ComponentFixture<TerminiCondizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminiCondizioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminiCondizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
