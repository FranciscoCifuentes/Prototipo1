

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
  login(usuario: string, contrasena: string, rol: string): boolean {
    return usuario === 'admin' && contrasena === '1234' && rol === 'pro_cumpl';
  }
}

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
  SelectModule,
    InputTextModule,
    ButtonModule
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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
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
      if (this.authService.login(usuario, contrasena, rol)) {
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
