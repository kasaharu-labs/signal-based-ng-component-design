import { ComponentFixture, TestBed } from '@angular/core/testing';

import PdsCqsComponent from './pds-cqs.component';

describe('PdsCqsComponent', () => {
  let component: PdsCqsComponent;
  let fixture: ComponentFixture<PdsCqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PdsCqsComponent],
    });
    fixture = TestBed.createComponent(PdsCqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
