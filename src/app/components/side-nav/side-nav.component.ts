import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { patternState } from 'src/app/models/patternState.enum';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  sideNavOpened: boolean = false;
  mass = [
    { name: 'Стратегия', key: 'strategy' },
    { name: 'Синглтон', key: 'singleton' },
    { name: 'Команда', key: 'command' },
  ];

  state: patternState = patternState.createNew;

  constructor() {}

  ngOnInit(): void {}

  changeState(newState: patternState): void {
    console.log('changeState');
    console.log(this.state);

    this.state = newState;
    console.log(this.state);
  }

  changeSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
    console.log('changeSdeNav');
  }
}
