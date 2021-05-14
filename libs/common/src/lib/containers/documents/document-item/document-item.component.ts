import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.cutAuthors();
    this.cutTitle();
  }

  public lol(): void {
    window.open(this.document.documentFileName);
  }

  public cutAuthors(): void {
    this.document.authorDocuments.forEach(x => {
      //сut authors
      // if (this.authorsString.length + x.author.name.length < 24) {
      this.authorsString += x.author.firstName + ', ';
      // }
    });

    // this.authorsString = this.authorsString.substr(0, this.authorsString.length - 2);
  }

  public cutTitle(): void {
    const title = this.document.title;
    const words = title.split(' ');

    words.forEach(word => {
      if (this.titleString.length + word.length < 32) {
        this.titleString += word + ' ';
      }
    })

    this.titleString = this.titleString.substr(0, this.titleString.length - 1);

    this.titleString += '...';
  }
}
