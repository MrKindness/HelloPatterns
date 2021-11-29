import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fileType } from 'src/app/models/fileType';
import { pattern } from 'src/app/models/pattern';
import { patternState } from 'src/app/models/patternState.enum';
import { TabSwitchService } from 'src/app/services/tabSwitch.service';

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
  constructor(private pageChange: TabSwitchService) {}

  ngOnInit(): void {}

  changeState(newState: patternState): void {
    this.pageChange.pageSwitch();
    this.state = newState;
  }

  changeSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
    console.log(this.newPattern);
  }
}
