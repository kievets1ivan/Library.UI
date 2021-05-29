import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { isNil } from 'lodash-es';

import { LibraryDocument } from '../../../models/document/library-document';
import { DocumentService } from '../../../services/document.service';
import { ImageService } from '../../../services/image.service';
import { DocumentTypeEnum } from '../../../enums/document-type-enum';

@Component({
  selector: 'lib-description',
  templateUrl: './document-description.component.html',
  styleUrls: ['./document-description.component.scss']
})
export class DocumentDescriptionComponent implements OnInit {

  public document: LibraryDocument;

  public get type(): string {
    return `DOCUMENT.${DocumentTypeEnum[this.document?.documentType]}`;
  }

  constructor(
    public imageService: ImageService,
    public documentService: DocumentService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getDocument();
  }

  public getDocument(): void {

    this.activateRoute.params.pipe(switchMap(params => {

      const documentId = params['id'];

      if (!isNil(documentId)) {
        return this.documentService.getDocumentById(params['id'])
      }

      return of();
    }))
      .subscribe((document: LibraryDocument) => {
        this.document = document;
        console.log(this.document);

      });
  }

  public onClick(): void {
    window.open(this.document.documentFileName);
  }

}
