import { Component } from '@angular/core';
import { ButtonsExperiencesComponent } from './buttons-experiences/buttons-experiences.component';
import { ButtonsStaysComponent } from "./buttons-stays/buttons-stays.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonsExperiencesComponent, ButtonsStaysComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  

}
