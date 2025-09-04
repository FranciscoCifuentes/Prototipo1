import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AsociacionOrdenesComponent } from '../asociacion-ordenes/asociacion-ordenes.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule]
})
export class NavbarComponent {
  @Output() moduloSeleccionado = new EventEmitter<string>();

  seleccionarModulo(modulo: string) {
    this.moduloSeleccionado.emit(modulo);
  }
}
