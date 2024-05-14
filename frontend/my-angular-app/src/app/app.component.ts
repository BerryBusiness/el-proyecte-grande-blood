/*
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Injector } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //constructor() { }
  constructor(private injector: Injector) {
    try {
      const http = this.injector.get(HttpClient);
      console.log('HttpClient is available:', http);
    } catch (error) {
      console.error('HttpClient is not available:', error);
    }
  }
}
*/
