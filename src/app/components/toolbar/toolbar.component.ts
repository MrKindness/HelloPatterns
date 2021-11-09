import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output()
  menuClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  MenuClick(): void {
    this.menuClick.emit();
  }
}
