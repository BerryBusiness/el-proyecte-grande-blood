import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./pages/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent
  ],
    templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {}
