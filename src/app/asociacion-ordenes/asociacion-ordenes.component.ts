import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface OrdenData {
  id: number;
  orden: string;
  tipologia: string;
  estado: string;
}

const ELEMENT_DATA: OrdenData[] = [
  {id: 1, orden: 'ORD-001', tipologia: 'Tipo 1', estado: 'Abierta'},
  {id: 2, orden: 'ORD-002', tipologia: 'Tipo 2', estado: 'Cerrada'},
  {id: 3, orden: 'ORD-003', tipologia: 'Tipo 3', estado: 'Abierta'}
];

@Component({
  selector: 'app-asociacion-ordenes',
  templateUrl: './asociacion-ordenes.component.html',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatTableModule, MatButtonModule]
})
export class AsociacionOrdenesComponent {
  displayedColumns: string[] = ['id', 'orden', 'tipologia', 'estado'];
  dataSource = ELEMENT_DATA;
}
