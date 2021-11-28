import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { java } from '@codemirror/lang-java';
import { Transaction } from '@codemirror/state';
import { Text } from '@codemirror/text';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  editor!: EditorView;
  @Input() content!: string[];
  @Input() readonly: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.editor = new EditorView({
      state: EditorState.create({
        extensions: [
          basicSetup,
          java(),
          EditorState.readOnly.of(this.readonly),
        ],
        doc: Text.of(this.content),
      }),
      parent: document.getElementById('editor') || undefined,
    });

    let transaction = this.editor.state.update({});
    this.editor.dispatch(transaction);
  }

  getContent() {
    let response: string[] = [];
    for (let i = 1; i <= this.editor.state.doc.lines; i++) {
      response.push(this.editor.state.doc.line(i).text);
    }
    return response;
  }
}
