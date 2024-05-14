import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet
  ],
    templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {}
