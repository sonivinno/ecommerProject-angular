import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmrouteComponent } from './confirmroute.component';

describe('ConfirmrouteComponent', () => {
  let component: ConfirmrouteComponent;
  let fixture: ComponentFixture<ConfirmrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
