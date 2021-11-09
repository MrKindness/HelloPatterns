import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  sideNavOpened: boolean = false;
  constructor() {}

  mass = [
    { name: 'Стратегия', key: 'strategy' },
    { name: 'Синглтон', key: 'singleton' },
    { name: 'Команда', key: 'command' },
  ];

  ngOnInit(): void {}

  drawerToggle() {
    console.log('in side nav component toggle');
    this.sideNavOpened = !this.sideNavOpened;
  }
}
