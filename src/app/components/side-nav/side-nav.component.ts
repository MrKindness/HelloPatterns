import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { emptyPattern } from 'src/app/models/emptyPattern';
import { fileType } from 'src/app/models/fileType.enum';
import { pattern } from 'src/app/models/pattern';
import { patternState } from 'src/app/models/patternState.enum';
import { EditorControlService } from 'src/app/services/EditorControl.service';
import { PageControlService } from 'src/app/services/PageControl.service';
import { StateChangeService } from 'src/app/services/StateChange.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  sideNavOpened: boolean = false;
  state: patternState = patternState.default;
  patterns: pattern[] = [];
  selectedPattern: pattern = new emptyPattern();
  subs: Subscription[] = [];

  constructor(
    private editorControl: EditorControlService,
    private pageControl: PageControlService,
    private stateChange: StateChangeService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.pageControl.notificationObject.subscribe((arg) => {
        switch (arg) {
          case undefined:
            this.changeSideNav();
            break;
          case patternState.create:
            this.setCreatePage();
            break;
          case patternState.default:
            this.setDefaultPage();
            break;
        }
      })
    );
  }

  changeSideNav() {
    if (this.patterns.length > 0) this.sideNavOpened = !this.sideNavOpened;
  }

  setDefaultPage() {
    this.state = patternState.default;
    this.stateChange.changeState(patternState.default);
    this.editorControl.saveFile();
  }

  setCreatePage() {
    this.state = patternState.create;
    this.selectedPattern = new emptyPattern();
    this.stateChange.changeState(patternState.create);
    this.editorControl.saveFile();
  }

  patternSelected(event: any) {
    this.state = patternState.read;
    this.stateChange.changeState(patternState.read);
    this.editorControl.saveFile();
    this.selectedPattern = event;
  }

  addNewPattern() {
    this.state = patternState.default;
    this.stateChange.changeState(patternState.default);
    this.patterns.push(this.selectedPattern);
    this.selectedPattern = new emptyPattern();
  }
}
