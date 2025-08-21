import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeIndia from '@angular/common/locales/en-IN';

registerLocaleData(localeIndia);
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideAnimations(), provideHttpClient(),
    // provideHttpClient(withInterceptorsFromDi()), // Enable HTTP client with DI-based interceptors
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthInterceptor,
    //     multi: true // Allows multiple interceptors
    //   },
    { provide: LOCALE_ID, useValue: 'en-IN' }],
};
