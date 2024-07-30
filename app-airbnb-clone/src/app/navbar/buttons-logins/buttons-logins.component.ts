import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-buttons-logins',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './buttons-logins.component.html',
  styleUrl: './buttons-logins.component.scss'
})
export class ButtonsLoginsComponent {

}
