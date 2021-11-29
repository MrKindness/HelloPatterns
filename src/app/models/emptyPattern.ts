import { fileObject } from './fileObject';
import { fileType } from './fileType.enum';
import { pattern } from './pattern';

export class emptyPattern implements pattern {
  name: String;
  description: String;
  files: fileObject;

  constructor() {
    this.name = '';
    this.description = '';
    this.files = {
      name: 'src',
      content: undefined,
      subFolders: [],
      type: fileType.root,
    };
  }
}
