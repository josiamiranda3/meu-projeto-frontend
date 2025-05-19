import { Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ImpactosComponent } from './pages/impactos/impactos.component';
import { DoarComponent } from './pages/doar/doar.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LoginComponent } from './pages/login/login.component'; // crie este depois
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'impactos', component: ImpactosComponent },
      { path: 'doar', component: DoarComponent },
      { path: 'transferencia', component: TransferenciaComponent },
      { path: 'contato', component: ContatoComponent }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {path: 'welcome', component: WelcomeComponent} // crie este depois
    ]
  },
  { path: '**', redirectTo: '' } // opcional: rota curinga
];
