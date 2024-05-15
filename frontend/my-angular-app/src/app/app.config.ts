import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
    provideRouter(
      [
        { path: '', component: MainPageComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ],
      withComponentInputBinding()
    ), provideAnimationsAsync()
  ],
};
