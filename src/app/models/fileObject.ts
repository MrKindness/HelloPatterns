import { fileType } from './fileType.enum';

export interface fileObject {
  name: String;
  content: string[] | undefined;
  subFolders: fileObject[] | undefined;
  type: fileType;
}
