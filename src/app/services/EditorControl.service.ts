import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { editorControlType } from '../models/editorControl.enum';

@Injectable()
export class EditorControlService {
  notificationObject = new Subject<{ type: editorControlType; data?: any }>();

  saveFile(): void {
    this.notificationObject.next({ type: editorControlType.saveFile });
  }

  setNewFile(file: any): void {
    this.notificationObject.next({
      type: editorControlType.setFile,
      data: file,
    });
  }

  setReadOnly(readOnly: boolean) {
    this.notificationObject.next({
      type: editorControlType.setReadOnly,
      data: readOnly,
    });
  }
}
