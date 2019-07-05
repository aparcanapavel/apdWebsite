import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherhoodComponent } from './brotherhood.component';

describe('BrotherhoodComponent', () => {
  let component: BrotherhoodComponent;
  let fixture: ComponentFixture<BrotherhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
