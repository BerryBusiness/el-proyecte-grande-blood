import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-times',
  standalone: true,
  templateUrl: './times.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./times.component.css'],

})
export class TimesComponent {
  @Input() availableTimes: string[] = [];
  @Output() timeSelected = new EventEmitter<string>();

  constructor() { }

  onSelectTime(time: string) {
    this.timeSelected.emit(time);
  }


}
