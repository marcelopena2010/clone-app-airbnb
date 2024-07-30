import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-yourhome',
  standalone: true,
  imports: [ 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './buttons-yourhome.component.html',
  styleUrl: './buttons-yourhome.component.scss'
})
export class ButtonsYourhomeComponent {

}