import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { isNil } from 'lodash-es';

import { DocumentService, LibraryDocument, PaginationComponent, PaginationService, Section, SectionService } from '@lib/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'library-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [PaginationService]
})
export class SearchComponent implements OnDestroy, AfterViewInit {

  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent<LibraryDocument>;

  public retrievedDocuments: LibraryDocument[];
  public placeholderSectionName: string;
  public searchTermWasEntered = false;
  public searchSection: Section = {
    id: 0,
    name: '',
    isTopSection: false,
    imageFileName: '',
    documents: []
  }

  private destroyed$: Subject<void> = new Subject<void>();

  public searchFormGroup = this.fb.group({
    searchTerm: [''],
  });

  constructor(
    public documentService: DocumentService,
    public sectionService: SectionService,
    public paginationService: PaginationService<LibraryDocument>,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
  ) { }

  public ngAfterViewInit(): void {
    this.tryToGetSectionId();
    this.getDocuments();
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public tryToGetSectionId(): void {

    this.activateRoute.queryParams.pipe(switchMap(params => {

      const sectionId = params['id'];

      if (!isNil(sectionId)) {
        return this.sectionService.getById(params['id'])
      }

      return of();
    }))
      .subscribe((section: Section) => {
        this.paginationComponent.searchParams.section = section;
        this.placeholderSectionName = `Категорія: ${section.name}`;
        this.searchSection = section;
        this.paginationComponent.applyPaging();
      });
  }

  public onClick(): void {
    this.paginationComponent.searchParams.searchTerm = this.searchFormGroup.get('searchTerm').value;
    this.paginationComponent.searchParams.section = null;
    this.searchTermWasEntered = true;
    this.paginationComponent.applyPaging();
  }

  private getDocuments(): void {
    this.paginationService.data.pipe(
      takeUntil(this.destroyed$))
      .subscribe((documents: LibraryDocument[]) => {
        this.retrievedDocuments = documents;
      });
  }

}
