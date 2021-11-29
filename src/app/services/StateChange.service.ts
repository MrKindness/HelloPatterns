import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { patternState } from '../models/patternState.enum';

@Injectable()
export class StateChangeService {
  notificationObject = new Subject<patternState>();

  changeState(state: patternState) {
    console.log('state changed');

    this.notificationObject.next(state);
  }
}
