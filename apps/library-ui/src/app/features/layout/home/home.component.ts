import { Component, OnInit } from '@angular/core';
import { DocumentService, LibraryDocument } from '@lib/common';

@Component({
  selector: 'library-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public freshDocuments: LibraryDocument[];

  public isShowed10Docs = false;

  constructor(
    public documentService: DocumentService,
  ) { }

  public ngOnInit(): void {
    this.get4FreshDocuments();
  }

  public show10Docs(): void {
    this.isShowed10Docs = true;
    this.get10FreshDocuments();
  }

  private get4FreshDocuments(): void {
    this.documentService.getDocuments({ isFresh: true, takeAmount: 4 }).subscribe((documents: LibraryDocument[]) => {
      this.freshDocuments = documents;
    });
  }

  private get10FreshDocuments(): void {
    this.documentService.getDocuments({ isFresh: true, takeAmount: 10 }).subscribe((documents: LibraryDocument[]) => {
      this.freshDocuments = documents;
    });
  }
}
