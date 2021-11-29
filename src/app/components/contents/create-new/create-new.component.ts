import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CodeEditorComponent } from 'src/app/common/components/code-editor/code-editor.component';
import { fileObject } from 'src/app/models/fileObject';
import { fileType } from 'src/app/models/fileType';
import { pattern } from 'src/app/models/pattern';
import { TabSwitchService } from 'src/app/services/tabSwitch.service';

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
  selectedFile: fileObject | undefined = undefined;
  @Input() newPattern?: pattern;

  constructor(private pageChange: TabSwitchService) {}

  ngOnInit(): void {}

  addNewAction(): void {
    console.log(this.newPattern);
  }

  OpenDescription() {
    this.pageChange.pageSwitch();
    if (this.modeTogle) this.modeTogle = createMode.description;
  }

  OpenFiles() {
    this.pageChange.pageSwitch();
    this.modeTogle = createMode.files;
  }

  fileClicked(data: any) {
    this.selectedFile = data;
    console.log(data);
  }
}
