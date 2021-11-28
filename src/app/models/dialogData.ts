export interface dialogData {
  headerText: String;
  itemName: String;
  deleteConfirmation: boolean;
  type: dialogType;
}

export enum dialogType {
  //0
  addFolder,
  //1
  addFile,
  //2
  rename,
  //3
  delete,
}
