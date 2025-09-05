import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Output, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SentenciaService, SentenciaData } from '../services/sentencia.service';

// Tipos importados desde SentenciaService

// Los datos ahora se cargarán desde el archivo JSON

@Component({
  selector: 'app-gestion-sentencias',
  templateUrl: './gestion-sentencias.component.html',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, HttpClientModule]
})
export class GestionSentenciasComponent {
  displayedColumns: string[] = ['id', 'nro_sentencia', 'descripcion', 'estado'];
  dataSource: any[] = [];

  @Output() abrirOrden = new EventEmitter<number>();

  constructor(private sentenciaService: SentenciaService) {
    this.cargarSentencias();
  }

  cargarSentencias() {
    this.sentenciaService.getSentencias().subscribe((data: SentenciaData[]) => {
      this.dataSource = data.map(s => ({
        id: s.id,
        nro_sentencia: s.nro_sentencia,
        descripcion: s.descripcion,
        estado: s.ordenes && s.ordenes.length > 0 ? s.ordenes[0].estado : ''
      }));
    });
  }

  abrirModalOrdenes(sentenciaId: number) {
    this.abrirOrden.emit(sentenciaId);
  }
}
