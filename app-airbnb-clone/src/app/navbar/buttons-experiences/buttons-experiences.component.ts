import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-experiences',
  standalone: true,
  imports: [ 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  templateUrl: './buttons-experiences.component.html',
  styleUrl: './buttons-experiences.component.scss'
})
export class ButtonsExperiencesComponent {

}
