import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from '../navbar/navbar.component';
import { GestionSentenciasComponent } from '../gestion-sentencias/gestion-sentencias.component';
import { GestionOrdenesComponent } from '../gestion-ordenes/gestion-ordenes.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardModule, NavbarComponent, GestionSentenciasComponent, GestionOrdenesComponent]
})
export class PrincipalComponent {
  moduloActual: string | null = null;
  sentenciaSeleccionada: number | null = null;

  // Sin inyección de servicios, solo lógica de navegación
  mostrarGestionOrdenes(sentenciaId: number) {
    this.sentenciaSeleccionada = sentenciaId;
    this.moduloActual = 'gestion-ordenes';
  }

  volverAListado() {
    this.sentenciaSeleccionada = null;
    this.moduloActual = 'gestion-sentencias';
  }
}
