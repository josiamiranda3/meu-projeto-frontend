import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = false;

  // Simulação de login
  login(email: string, password: string): Observable<any> {
    // Aqui você pode substituir por uma chamada real à API
    if (email === 'admin' && password === '123456') {
      return of({ nome: 'Administrador' });
    } else {
      return throwError(() => ({
        error: { message: 'Credenciais inválidas' },
      }));
    }
  }

  // Marcar como logado
  setLogin() {
    this.isLoggedIn = true;
  }

  // Retornar status de login
  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
