import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fileType } from 'src/app/models/fileType.enum';
import { pattern } from 'src/app/models/pattern';
import { patternState } from 'src/app/models/patternState.enum';
import { EditorControlService } from 'src/app/services/EditorControl';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  sideNavOpened: boolean = false;
  state: patternState = patternState.createNew;
  newPattern: pattern = {
    description: '',
    name: '',
    files: {
      name: 'src',
      content: undefined,
      subFolders: [],
      type: fileType.root,
    },
  };
  patterns: pattern[] = [];

  constructor(private editorControl: EditorControlService) {}

  ngOnInit(): void {}

  changeState(newState: patternState): void {
    this.editorControl.saveFile();
    this.state = newState;
  }

  changeSideNav() {
    if (this.patterns.length > 0) this.sideNavOpened = !this.sideNavOpened;
  }

  saveNewPattern() {
    console.log(this.newPattern);
  }
}
