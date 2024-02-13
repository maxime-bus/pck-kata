import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './ui/app.config';
import { AppComponent } from './ui/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
