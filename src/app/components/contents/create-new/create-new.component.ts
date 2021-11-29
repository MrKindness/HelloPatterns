import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { fileObject } from 'src/app/models/fileObject';
import { pattern } from 'src/app/models/pattern';
import { FileDeleteService } from 'src/app/services/FileDelete.service';
import { EditorControlService } from 'src/app/services/EditorControl';

enum createMode {
  description,
  files,
}

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  @Input() newPattern?: pattern;
  @Output() savePattern = new EventEmitter();

  modeTogle: createMode = createMode.files;
  selectedFile: fileObject | undefined = undefined;
  sub!: Subscription;

  constructor(
    private editorControl: EditorControlService,
    private delServ: FileDeleteService
  ) {}

  ngOnInit(): void {
    this.sub = this.delServ.delNotificationObject.subscribe((event) => {
      if (event === this.selectedFile) this.selectedFile = undefined;
    });
  }

  addNewAction(): void {
    if (this.newPattern!.name.length > 0) this.savePattern.emit();
  }

  OpenDescription() {
    this.editorControl.saveFile();
    if (this.modeTogle) this.modeTogle = createMode.description;
  }

  OpenFiles() {
    this.editorControl.saveFile();
    this.modeTogle = createMode.files;
  }

  fileClicked(data: any) {
    console.log('fileclicked');

    this.editorControl.saveFile();
    this.selectedFile = data;
    this.editorControl.setNewFile(data);
  }
}
