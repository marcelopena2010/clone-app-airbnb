import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsStaysComponent } from './buttons-stays.component';

describe('ButtonsStaysComponent', () => {
  let component: ButtonsStaysComponent;
  let fixture: ComponentFixture<ButtonsStaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsStaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
