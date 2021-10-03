import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
})
export class SubComponent {
  @Input() textValue: string = '';
  @Output() onSave: EventEmitter<string> = new EventEmitter();

  constructor() {}

  save(saveForm: NgForm): void {
    this.onSave.emit(saveForm.value.editedValue);
  }
}
