import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-stays',
  standalone: true,
  imports: [ 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './buttons-stays.component.html',
  styleUrl: './buttons-stays.component.scss'
})
export class ButtonsStaysComponent {

}
