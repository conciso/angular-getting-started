import { Component } from '@angular/core';

import { MyService } from '../my.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent {
  myBoolean = true;
  myArray = [1, 2, 3];

  constructor(private myService: MyService) {}
}
