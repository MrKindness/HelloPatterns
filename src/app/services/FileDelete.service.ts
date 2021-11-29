import { Subject } from 'rxjs';

export class FileDeleteService {
  delNotificationObject = new Subject();

  delFile(object: any): void {
    this.delNotificationObject.next(object);
  }
}
