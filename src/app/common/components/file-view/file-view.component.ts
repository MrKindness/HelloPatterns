import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dialogData, dialogType } from 'src/app/models/dialogData';
import { fileObject } from 'src/app/models/fileObject';
import { fileType } from 'src/app/models/fileType.enum';
import { FileDeleteService } from 'src/app/services/FileDelete.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss'],
})
export class FileViewComponent implements OnInit {
  @Input() readonly: boolean = false;
  @Input() file!: fileObject;
  @Output() itemClicked = new EventEmitter<fileObject>();
  @Output() itemDelete = new EventEmitter<fileObject>();

  expanded: boolean = false;

  dialogData: dialogData = {
    deleteConfirmation: false,
    headerText: '',
    itemName: '',
    type: dialogType.addFile,
  };

  constructor(public dialog: MatDialog, private delNot: FileDeleteService) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: this.dialogData,
      disableClose: true,
      restoreFocus: false,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.handleResult();
    });
  }

  handleMenu(type: dialogType) {
    console.log(type);
    switch (type) {
      case 0:
        this.dialogData.headerText = 'Введите имя новой директории';
        this.dialogData.itemName = '';
        this.dialogData.type = dialogType.addFolder;
        break;
      case 1:
        this.dialogData.headerText = 'Введите имя нового файла';
        this.dialogData.itemName = '';
        this.dialogData.type = dialogType.addFile;
        break;
      case 2:
        this.dialogData.headerText = 'Введите новое имя элемента';
        this.dialogData.itemName = this.file.name;
        this.dialogData.type = dialogType.rename;
        break;
      case 3:
        this.dialogData.headerText = 'Вы действительно хотите удалить элемент?';
        this.dialogData.itemName = '';
        this.dialogData.type = dialogType.delete;
        break;
    }
    this.openDialog();
  }

  handleResult() {
    switch (this.dialogData.type) {
      case dialogType.addFolder:
        if (this.dialogData.itemName.length > 0)
          this.file.subFolders?.push({
            content: undefined,
            name: this.dialogData.itemName,
            subFolders: [],
            type: fileType.folder,
          });
        break;
      case dialogType.addFile:
        if (this.dialogData.itemName.length > 0)
          this.file.subFolders?.push({
            content: [''],
            name: this.dialogData.itemName,
            subFolders: undefined,
            type: fileType.file,
          });
        break;
      case dialogType.rename:
        if (this.dialogData.itemName.length > 0)
          this.file.name = this.dialogData.itemName;
        break;
      case dialogType.delete:
        if (this.dialogData.deleteConfirmation) {
          this.itemDelete.emit(this.file);
        }
        break;
    }
  }

  itemClick() {
    if (this.file.type != fileType.file) this.expanded = !this.expanded;
    else this.itemClicked.emit(this.file);
  }

  raiseChildClick(event: any) {
    this.itemClicked.emit(event);
  }

  deleteItem(event: any) {
    this.file.subFolders!.forEach((item, index) => {
      if (item === event) {
        this.file.subFolders!.splice(index, 1);
        this.delNot.delFile(event);
      }
    });
  }
}
