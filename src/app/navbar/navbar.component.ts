import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { GestionSentenciasComponent } from '../gestion-sentencias/gestion-sentencias.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, ToolbarModule, MenuModule, ButtonModule]
})
export class NavbarComponent {
  @Output() moduloSeleccionado = new EventEmitter<string>();

  menuItems = [
    {
      label: 'Gestión de sentencias',
      icon: 'pi pi-list',
      command: () => this.seleccionarModulo('gestion-sentencias')
    }
  ];

  seleccionarModulo(modulo: string) {
    this.moduloSeleccionado.emit(modulo);
  }
}
