import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-experiences',
  standalone: true,
  imports: [ 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './buttons-experiences.component.html',
  styleUrl: './buttons-experiences.component.scss'
})
export class ButtonsExperiencesComponent {

}
