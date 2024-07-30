import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLoginsComponent } from './buttons-logins.component';

describe('ButtonsLoginsComponent', () => {
  let component: ButtonsLoginsComponent;
  let fixture: ComponentFixture<ButtonsLoginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsLoginsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
