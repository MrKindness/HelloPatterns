import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { controlEvent } from './models/controlEvent';
import { patternState } from './models/patternState.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(SideNavComponent) sideNav!: SideNavComponent;

  controlClick(arg: controlEvent): void {
    if (arg.argument == undefined) this.sideNav.changeSideNav();
    else this.sideNav.changeState(arg.argument);
  }
}
