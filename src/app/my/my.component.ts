import { Component } from '@angular/core';

import { MyService } from '../my.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent {
  subComponentOutput = '';

  constructor(private myService: MyService) {}

  writeOutput(outputValue: string): void {
    this.subComponentOutput = outputValue;
  }
}
