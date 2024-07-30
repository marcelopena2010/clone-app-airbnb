import { Component } from '@angular/core';
import { ButtonsExperiencesComponent } from './buttons-experiences/buttons-experiences.component';
import { ButtonsStaysComponent } from "./buttons-stays/buttons-stays.component";
import { ButtonsYourhomeComponent } from "./buttons-yourhome/buttons-yourhome.component";
import { ButtonsLoginsComponent } from "./buttons-logins/buttons-logins.component";
import { ButtonsIconesComponent } from "./buttons-icones/buttons-icones.component";
import { MatDivider } from '@angular/material/divider';
import { ButtonsSearchComponent } from "./buttons-search/buttons-search.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonsExperiencesComponent,
    ButtonsStaysComponent,
    ButtonsYourhomeComponent,
    ButtonsLoginsComponent,
    ButtonsIconesComponent,
    MatDivider,
    ButtonsSearchComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  

}
