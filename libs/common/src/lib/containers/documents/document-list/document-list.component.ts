import { Component, Input } from '@angular/core';

import { LibraryDocument } from '../../../models/document/library-document';

@Component({
  selector: 'lib-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  @Input() documents: LibraryDocument[];
  @Input() isShowed10Docs: boolean;

  constructor() {

  }

}
