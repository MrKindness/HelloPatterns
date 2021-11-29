import { fileType } from './fileType';

export interface fileObject {
  name: String;
  content: string[] | undefined;
  subFolders: fileObject[] | undefined;
  type: fileType;
}
