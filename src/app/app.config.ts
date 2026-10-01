import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideLuxonDateAdapter } from '@angular/material-luxon-adapter'
import { MAT_DATE_LOCALE } from '@angular/material/core';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    provideLuxonDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt'},
  ]
};


