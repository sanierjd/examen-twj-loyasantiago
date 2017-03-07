import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgarreComponent } from './agarre.component';

describe('AgarreComponent', () => {
  let component: AgarreComponent;
  let fixture: ComponentFixture<AgarreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgarreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
