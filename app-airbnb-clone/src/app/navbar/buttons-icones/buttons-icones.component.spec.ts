import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsIconesComponent } from './buttons-icones.component';

describe('ButtonsIconesComponent', () => {
  let component: ButtonsIconesComponent;
  let fixture: ComponentFixture<ButtonsIconesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsIconesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsIconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
