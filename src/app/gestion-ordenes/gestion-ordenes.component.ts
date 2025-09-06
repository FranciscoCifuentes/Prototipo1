import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SentenciaService, SentenciaData } from '../services/sentencia.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-gestion-ordenes',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, ButtonModule, CardModule, BreadcrumbModule],
  templateUrl: './gestion-ordenes.component.html',
  styleUrls: ['./gestion-ordenes.component.css']
})
export class GestionOrdenesComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Sentencias', url: '/gestion-sentencias', styleClass: 'breadcrumb-link' },
  ];
  @Input() sentenciaId: number | null = null;
  sentencia: SentenciaData | undefined;

  constructor(private sentenciaService: SentenciaService) {}

  ngOnInit(): void {
    if (this.sentenciaId != null) {
      this.sentenciaService.getSentenciaById(this.sentenciaId).subscribe(s => {
        this.sentencia = s;
        if (s && s.nro_sentencia) {
          this.breadcrumbItems = [
            { label: 'Sentencias', url: '/gestion-sentencias', styleClass: 'breadcrumb-link' },
            { label: `Orden ${s.nro_sentencia}`, url: `/gestion-ordenes/${s.nro_sentencia}`, styleClass: 'breadcrumb-link' }
          ];
        } else {
          this.breadcrumbItems = [
            { label: 'Sentencias', url: '/gestion-sentencias', styleClass: 'breadcrumb-link' }
          ];
        }
      });
    }
  }
}
