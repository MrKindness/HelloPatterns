import { Component, OnInit } from '@angular/core';

enum createMode {
  descrtiption,
  files,
}

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  modeTogle: createMode = createMode.descrtiption;

  constructor() {}

  ngOnInit(): void {}
}
