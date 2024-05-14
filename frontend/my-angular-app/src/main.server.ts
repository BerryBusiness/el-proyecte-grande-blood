import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app/app.config';
import {RootComponent} from "./app/root.component";

const bootstrap = () => bootstrapApplication(RootComponent, {
  providers: [
    ...appConfig.providers,
    provideServerRendering()
  ]
});

export default bootstrap;
