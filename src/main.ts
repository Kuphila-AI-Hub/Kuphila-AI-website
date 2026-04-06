import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject();

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
