import { patternState } from './patternState.enum';

export interface controlEvent {
  argument?: patternState;
  key: string;
}
