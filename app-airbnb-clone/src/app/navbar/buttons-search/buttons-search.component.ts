import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-search',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './buttons-search.component.html',
  styleUrl: './buttons-search.component.scss'
})
export class ButtonsSearchComponent {

}
