import { Component, OnInit } from '@angular/core';
import { patternState } from 'src/app/models/patternState.enum';
import { PageControlService } from 'src/app/services/PageControl.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private pageControl: PageControlService) {}

  ngOnInit(): void {}

  ControlClick(arg?: patternState): void {
    this.pageControl.pageEvent(arg);
  }
}
