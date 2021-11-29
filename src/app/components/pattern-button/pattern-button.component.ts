import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pattern } from 'src/app/models/pattern';

@Component({
  selector: 'app-pattern-button',
  templateUrl: './pattern-button.component.html',
  styleUrls: ['./pattern-button.component.scss'],
})
export class PatternButtonComponent implements OnInit {
  @Input() pattern!: pattern;
  @Output() buttonEmit = new EventEmitter<pattern>();

  constructor() {}

  ngOnInit(): void {}

  patternClick() {
    this.buttonEmit.emit(this.pattern);
  }
}
