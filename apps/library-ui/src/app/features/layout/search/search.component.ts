import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { DocumentService, LibraryDocument, PaginationComponent, PaginationService } from '@lib/common';

@Component({
  selector: 'library-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [PaginationService]
})
export class SearchComponent implements OnInit, OnDestroy {

  @ViewChild('lib-pagination') paginationComponent: PaginationComponent<LibraryDocument>;

  public retrievedDocuments: LibraryDocument[];
  public inputSearchTerm = '';
  public searchTermWasEntered = false;

  private destroyed$: Subject<void> = new Subject<void>();

  public searchFormGroup = this.fb.group({
    searchTerm: [''],
  });

  constructor(
    public documentService: DocumentService,
    public paginationService: PaginationService<LibraryDocument>,
    private fb: FormBuilder,
  ) { }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public ngOnInit(): void {
    this.getDocuments();
  }

  public onClick(): void {
    this.inputSearchTerm = this.searchFormGroup.get('searchTerm').value;
    this.searchTermWasEntered = true;
  }

  private getDocuments(): void {
    this.paginationService.data.pipe(
      takeUntil(this.destroyed$))
      .subscribe((documents: LibraryDocument[]) => {
        if (this.searchTermWasEntered) {
          this.retrievedDocuments = documents;
        }
        else {
          this.retrievedDocuments = [];
        }
      });
  }

}
