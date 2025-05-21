import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withScrollPositionRestoration } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withScrollPositionRestoration('enabled')), provideClientHydration(withEventReplay()),provideHttpClient()]
};
