import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-buttons-icones',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './buttons-icones.component.html',
  styleUrl: './buttons-icones.component.scss'
})
export class ButtonsIconesComponent {

}
