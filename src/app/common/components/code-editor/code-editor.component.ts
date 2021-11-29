import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { java } from '@codemirror/lang-java';
import { Transaction } from '@codemirror/state';
import { Text } from '@codemirror/text';
import { Subscription } from 'rxjs';
import { fileObject } from 'src/app/models/fileObject';
import { TabSwitchService } from 'src/app/services/tabSwitch.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  editor!: EditorView;
  @Input() file!: fileObject;
  @Input() readonly: boolean = false;
  sub!: Subscription;

  constructor(private pageChange: TabSwitchService) {}

  ngOnInit(): void {
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

    this.sub = this.pageChange.notificationObject.subscribe(() => {
      this.file.content = this.saveContent();
    });
  }

  saveContent() {
    let response: string[] = [];
    for (let i = 1; i <= this.editor.state.doc.lines; i++) {
      response.push(this.editor.state.doc.line(i).text);
    }
    return response;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
