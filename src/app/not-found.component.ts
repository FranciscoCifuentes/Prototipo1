import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1>404</h1>
        <div class="not-found-texts">
          <h2>Página no encontrada</h2>
          <p>La ruta que buscas no existe o fue movida.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #1976d2 0%, #64b5f6 100%);
    }
    .not-found-content {
      background: #fff;
      padding: 3rem 2rem;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(25, 118, 210, 0.15);
      text-align: center;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .not-found-texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }
    h1 {
      font-size: 6rem;
      margin: 0;
      color: #1976d2;
      font-weight: bold;
    }
    h2 {
      font-size: 2rem;
      margin: 0;
      color: #333;
    }
    p {
      color: #666;
      margin: 0;
    }
    .back-home {
      display: inline-block;
      padding: 0.75rem 2rem;
      background: #1976d2;
      color: #fff;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.2s;
    }
    .back-home:hover {
      background: #1565c0;
    }
  `]
})
export class NotFoundComponent {}
