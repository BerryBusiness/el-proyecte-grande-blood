import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-main-page',
  standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        RouterModule,
        MatButton
    ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {}
