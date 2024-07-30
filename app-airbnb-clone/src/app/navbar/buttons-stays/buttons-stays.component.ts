import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-stays',
  standalone: true,
  imports: [ 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  templateUrl: './buttons-stays.component.html',
  styleUrl: './buttons-stays.component.scss'
})
export class ButtonsStaysComponent {

}
