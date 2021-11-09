import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(SideNavComponent) sideNav!: SideNavComponent;

  menuClick(): void {
    this.sideNav.drawerToggle();
  }
}
