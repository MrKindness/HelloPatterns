import { fileType } from './fileType';

export interface fileObject {
  name: String;
  content: string[];
  subFolders: fileObject[];
  type: fileType;
}
