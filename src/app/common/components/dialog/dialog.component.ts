import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogData } from 'src/app/models/dialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: dialogData
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.data.deleteConfirmation = false;
    this.dialogRef.close();
  }

  ok() {
    this.data.deleteConfirmation = true;
    this.dialogRef.close();
  }
}
