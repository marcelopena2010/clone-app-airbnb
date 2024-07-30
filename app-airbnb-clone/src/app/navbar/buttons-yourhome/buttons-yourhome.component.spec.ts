import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsYourhomeComponent } from './buttons-yourhome.component';

describe('ButtonsYourhomeComponent', () => {
  let component: ButtonsYourhomeComponent;
  let fixture: ComponentFixture<ButtonsYourhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsYourhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsYourhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
