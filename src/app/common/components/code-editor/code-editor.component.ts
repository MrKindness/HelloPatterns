import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { java } from '@codemirror/lang-java';
import { Transaction } from '@codemirror/state';
import { Text } from '@codemirror/text';
import { Subscription } from 'rxjs';
import { editorControlType } from 'src/app/models/editorControl.enum';
import { fileObject } from 'src/app/models/fileObject';
import { EditorControlService } from 'src/app/services/EditorControl.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  editor!: EditorView;
  @Input() file!: fileObject;
  @Input() readonly!: boolean;
  sub!: Subscription;

  constructor(private editorControl: EditorControlService) {}

  ngOnInit(): void {
    console.log(this.readonly);

    this.sub = this.editorControl.notificationObject.subscribe((object) => {
      switch (object.type) {
        case editorControlType.saveFile:
          this.file.content = this.saveContent();
          break;
        case editorControlType.setFile:
          this.file = object.data;
          this.refreshEditor();
          break;
        case editorControlType.setReadOnly:
          this.readonly = object.data;
          this.refreshEditor();
          break;
      }
    });

    this.editor = new EditorView({
      state: EditorState.create({
        extensions: [
          basicSetup,
          java(),
          EditorState.readOnly.of(this.readonly),
        ],
        doc: Text.of(this.file.content || ['']),
      }),
      parent: document.getElementById('editor') || undefined,
    });
  }

  saveContent() {
    let response: string[] = [];
    for (let i = 1; i <= this.editor.state.doc.lines; i++) {
      response.push(this.editor.state.doc.line(i).text);
    }
    return response;
  }

  refreshEditor() {
    this.editor.setState(
      EditorState.create({
        extensions: [
          basicSetup,
          java(),
          EditorState.readOnly.of(this.readonly),
        ],
        doc: Text.of(this.file.content || ['']),
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
