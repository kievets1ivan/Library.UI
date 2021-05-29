import { Component, Input, OnInit } from '@angular/core';

import { DocumentService } from '../../../services/document.service';
import { ImageService } from '../../../services/image.service';
import { LibraryDocument } from '../../../models/document/library-document';

@Component({
  selector: 'lib-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss']
})
export class DocumentItemComponent implements OnInit {

  @Input() public document: LibraryDocument;

  public authorsString = '';
  public titleString = '';

  constructor(
    public imageService: ImageService,
    public documentService: DocumentService,
  ) { }

  ngOnInit() {
    this.cutAuthors();
  }

  public lol(): void {
    window.open(this.document.documentFileName);
  }

  public cutAuthors(): void {

    this.document.authorDocuments.forEach(x => {
      if (x.author.firstName) {
        this.authorsString += x.author.lastName + ' ' + x.author.firstName[0].toUpperCase() + '., ';
      } else {
        this.authorsString += x.author.lastName + ', ';
      }
    });

    this.authorsString = this.authorsString.substr(0, this.authorsString.length - 2);
  }
}
