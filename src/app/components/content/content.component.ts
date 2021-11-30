import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fileObject } from 'src/app/models/fileObject';
import { pattern } from 'src/app/models/pattern';
import { FileDeleteService } from 'src/app/services/FileDelete.service';
import { EditorControlService } from 'src/app/services/EditorControl.service';
import { patternState } from 'src/app/models/patternState.enum';
import { PageControlService } from 'src/app/services/PageControl.service';
import { emptyPattern } from 'src/app/models/emptyPattern';
import { StateChangeService } from 'src/app/services/StateChange.service';

enum createMode {
  description,
  files,
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {
  @Input() state: patternState = patternState.default;
  @Input() pattern?: pattern;
  @Output() addNewPattern = new EventEmitter();
  @Output() deletePattern = new EventEmitter<pattern>();

  modeTogle: createMode = createMode.description;
  selectedFile?: fileObject = undefined;
  subs: Subscription[] = [];

  constructor(
    private editorControl: EditorControlService,
    private delServ: FileDeleteService,
    private pageControl: PageControlService,
    private stateChange: StateChangeService
  ) {}

  ngOnDestroy(): void {
    for (let i = 0; i < this.subs.length; i++) this.subs[i].unsubscribe();
  }

  ngOnInit(): void {
    this.subs.push(
      this.delServ.delNotificationObject.subscribe((event) => {
        if (event === this.selectedFile) this.selectedFile = undefined;
      })
    );

    this.subs.push(
      this.pageControl.notificationObject.subscribe((arg) => {
        if (arg != undefined) {
          this.selectedFile = undefined;
        }
      })
    );

    this.subs.push(
      this.stateChange.notificationObject.subscribe((state) => {
        this.state = state;
        console.log('new state');
        console.log(this.state);

        if (state == patternState.read) this.editorControl.setReadOnly(true);
      })
    );
  }

  //Добавить диалоговое окно (после изменения струткуры проекта)
  addNewAction(): void {
    if (this.pattern!.name.length > 0) {
      this.editorControl.saveFile();
      this.addNewPattern.emit();
      this.selectedFile = undefined;
    }
  }

  ChangePatternAction() {
    this.state = 3;
    if (this.selectedFile != undefined) {
      this.editorControl.setReadOnly(false);
    }
  }

  SavePatternAction() {
    if (this.pattern!.name.length > 0) {
      this.editorControl.saveFile();
      this.state = 2;
      this.editorControl.setReadOnly(true);
    }
  }

  DeletePatternAction() {
    this.selectedFile = undefined;
    this.deletePattern.emit(this.pattern);
  }

  OpenDescription() {
    this.editorControl.saveFile();
    if (this.modeTogle) this.modeTogle = createMode.description;
    this.selectedFile = undefined;
  }

  OpenFiles() {
    this.editorControl.saveFile();
    this.modeTogle = createMode.files;
  }

  fileClicked(data: any) {
    this.editorControl.saveFile();
    this.selectedFile = data;
    this.editorControl.setNewFile(data);
  }
}
