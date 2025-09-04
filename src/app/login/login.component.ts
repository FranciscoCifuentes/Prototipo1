

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  roles = [
    { value: 'pro_cumpl', viewValue: 'Profesional de Cumplimiento' },
    { value: 'other', viewValue: 'Otro' }
  ];

  mensajeAcceso = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  get usuario() { return this.loginForm.get('usuario'); }
  get contrasena() { return this.loginForm.get('contrasena'); }
  get rol() { return this.loginForm.get('rol'); }


  onSubmit() {
    if (this.loginForm.valid) {
      const { usuario, contrasena, rol } = this.loginForm.value;
      if (usuario === 'admin' && contrasena === '1234' && rol === 'pro_cumpl') {
        this.mensajeAcceso = 'Acceso concedido';
        setTimeout(() => {
          this.router.navigate(['/principal']);
        }, 1200);
      } else {
        this.mensajeAcceso = 'Credenciales incorrectas';
      }
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
