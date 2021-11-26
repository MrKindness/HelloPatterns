import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { controlEvent } from 'src/app/models/controlEvent';
import { patternState } from 'src/app/models/patternState.enum';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output()
  controlClick: EventEmitter<controlEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ControlClick(arg: controlEvent): void {
    this.controlClick.emit(arg);
  }
}
