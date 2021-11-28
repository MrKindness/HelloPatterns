import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogData } from 'src/app/models/dialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  value: String = '';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: dialogData
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    console.log('cancel');
    this.data.deleteConfirmation = false;
    this.data.itemName = this.value;
    this.dialogRef.close();
  }

  ok() {
    console.log('ok');
    this.data.deleteConfirmation = true;
    this.data.itemName = this.value;
    this.dialogRef.close();
  }
}
