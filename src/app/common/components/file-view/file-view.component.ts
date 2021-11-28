import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dialogData, dialogType } from 'src/app/models/dialogData';
import { fileObject } from 'src/app/models/fileObject';
import { fileType } from 'src/app/models/fileType';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss'],
})
export class FileViewComponent implements OnInit {
  @Input() readolny: boolean = false;
  @Input() files!: fileObject;

  expanded: boolean = false;

  dialogData: dialogData = {
    deleteConfirmation: false,
    headerText: '',
    itemName: '',
    type: dialogType.addFile,
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: this.dialogData,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log(this.dialogData);
    });
  }

  handleMenu(type: dialogType) {
    switch (type) {
      case 0:
        this.dialogData.headerText = 'Введите имя новой директории';
        this.dialogData.type = dialogType.addFolder;
        break;
      case 1:
        this.dialogData.headerText = 'Введите имя нового файла';
        this.dialogData.type = dialogType.addFile;
        break;
      case 2:
        this.dialogData.headerText = 'Введите новое имя элемента';
        this.dialogData.type = dialogType.rename;
        break;
      case 3:
        this.dialogData.headerText = 'Вы действительно хотите удалить элемент?';
        this.dialogData.type = dialogType.delete;
        break;
    }
    this.openDialog();
  }

  folderClick() {
    this.expanded = !this.expanded;
  }
}
