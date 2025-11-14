import {
  ApplicationConfig,
  provideZoneChangeDetection,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAppInitializer, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { routes } from './app.routes';

const initMatIcons = provideAppInitializer(() => {
  const iconReg = inject(MatIconRegistry);
  const sanitizer = inject(DomSanitizer); 

  iconReg.registerFontClassAlias('material-icons', 'material-icons');
  iconReg.setDefaultFontSetClass('material-icons');
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    initMatIcons
  ]
};