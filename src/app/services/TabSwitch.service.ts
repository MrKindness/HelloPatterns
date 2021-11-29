import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TabSwitchService {
  switchNotificationObject = new Subject();

  pageSwitch(): void {
    this.switchNotificationObject.next();
  }
}
