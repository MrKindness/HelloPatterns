import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TabSwitchService {
  notificationObject = new Subject();

  pageSwitch(): void {
    this.notificationObject.next();
  }
}
