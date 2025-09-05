import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OrdenData {
  id: string;
  tipologia: string;
  estado: string;
  descripcion: string;
}

export interface SentenciaData {
  id: number;
  nro_sentencia: string;
  descripcion: string;
  ordenes: OrdenData[];
}

@Injectable({ providedIn: 'root' })
export class SentenciaService {
  private readonly url = 'assets/sentencias.json';

  constructor(private http: HttpClient) {}

  getSentencias(): Observable<SentenciaData[]> {
    return this.http.get<SentenciaData[]>(this.url);
  }

  getSentenciaById(id: number): Observable<SentenciaData | undefined> {
    return this.getSentencias().pipe(
      map((sentencias: SentenciaData[]) => sentencias.find((s: SentenciaData) => s.id === id))
    );
  }
}
