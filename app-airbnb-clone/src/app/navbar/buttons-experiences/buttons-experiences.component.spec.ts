import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsExperiencesComponent } from './buttons-experiences.component';

describe('ButtonsExperiencesComponent', () => {
  let component: ButtonsExperiencesComponent;
  let fixture: ComponentFixture<ButtonsExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
