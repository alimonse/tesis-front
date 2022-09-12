import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formularioLogin?: FormGroup;
  showPassword = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) {
    this.construirFormulario();
  }

  private construirFormulario() {
    this.formularioLogin = this._formBuilder.group({
      usuario: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  get campoUsuario() {
    return this.formularioLogin?.get('usuario');
  }

  get campoPassword() {
    return this.formularioLogin?.get('password');
  }

  ingresar() {
    if (this.formularioLogin?.valid) {
      this._router.navigate(['/appointment']).then();
    } else {
      this.formularioLogin?.markAllAsTouched();
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
