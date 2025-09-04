import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsociacionOrdenesComponent } from '../asociacion-ordenes/asociacion-ordenes.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, NavbarComponent, AsociacionOrdenesComponent]
})
export class PrincipalComponent {
  moduloActual: string | null = null;
}
