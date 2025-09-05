import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SentenciaService, SentenciaData } from '../services/sentencia.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-gestion-ordenes',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, ButtonModule, CardModule],
  templateUrl: './gestion-ordenes.component.html',
  styleUrls: ['./gestion-ordenes.component.css']
})
export class GestionOrdenesComponent implements OnInit {
  @Input() sentenciaId: number | null = null;
  sentencia: SentenciaData | undefined;

  constructor(private sentenciaService: SentenciaService) {}

  ngOnInit(): void {
    if (this.sentenciaId != null) {
      this.sentenciaService.getSentenciaById(this.sentenciaId).subscribe(s => {
        this.sentencia = s;
      });
    }
  }
}
