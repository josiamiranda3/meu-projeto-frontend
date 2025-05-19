import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  remember = false;
  isBrowser: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const savedEmail = localStorage.getItem('email');
      const remember = localStorage.getItem('remember') === 'true';
      if (remember && savedEmail) {
        this.email = savedEmail;
        this.remember = true;
      }
    }
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        alert('Login bem-sucedido! Bem-vindo(a), ' + res.nome);

        this.loginService.setLogin(); // Marcar usuário como logado no serviço

        if (this.isBrowser) {
          if (this.remember) {
            localStorage.setItem('email', this.email);
            localStorage.setItem('remember', 'true');
          } else {
            localStorage.removeItem('email');
            localStorage.removeItem('remember');
          }
        }

        setTimeout(() => {
          this.router.navigate(['/welcome']);
        }, 100); // Garante transição suave
      },
      error: (err) => {
        alert(err.error.message || 'Erro ao fazer login.');
        this.email = '';
        this.password = '';
      },
    });
  }
}
