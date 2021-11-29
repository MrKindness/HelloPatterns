import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { patternState } from '../models/patternState.enum';

@Injectable()
export class PageControlService {
  notificationObject = new Subject<patternState | undefined>();

  pageEvent(arg?: patternState): void {
    this.notificationObject.next(arg);
  }
}
