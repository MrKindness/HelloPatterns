import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CodeEditorComponent } from 'src/app/common/components/code-editor/code-editor.component';

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
  @ViewChild('editor') editor!: CodeEditorComponent;
  modeTogle: createMode = createMode.description;
  description: string = '';
  editorContent: string[] = ['heelo', 'helllloooooo', '     heeelllllooeoeoe'];

  constructor() {}

  ngOnInit(): void {}

  addNewAction(): void {
    console.log(this.editor.getContent());
  }

  OpenDescription() {
    if (this.modeTogle) this.modeTogle = createMode.description;
  }

  OpenFiles() {
    this.modeTogle = createMode.files;
  }
}
