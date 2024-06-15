// app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [

    // Add other components as necessary
  ],
  imports: [
    BrowserModule,
    AppComponent,
    // Add other Angular modules if needed (e.g., FormsModule, HttpClientModule)
  ],
  providers: [
  ],
  bootstrap: [AppComponent] // The main/root component
})
export class AppModule {}
