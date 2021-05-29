import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { range } from 'lodash-es';

import { PaginationService } from '../../pagination/pagination.service';
import { PaginationResponse } from '../../../models/pagination/pagination-response';
import { Section } from '@lib/common';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent<T> {

  public objects: T[];
  public pageNumber = 1;
  public pageSize = 5;
  public totalPages: number;
  public hasNext = false;
  public hasPrevious = false;
  public searchParams: { searchTerm: string, section: Section } = {
    searchTerm: '',
    section: {
      id: 0,
      name: '',
      isTopSection: false,
      imageFileName: '',
      documents: []
    },
  }

  @Input() getPaginationResults: (config?: {}) => Observable<PaginationResponse<T>>;

  constructor(
    private paginationService: PaginationService<T>
  ) { }

  public applyPaging(): void {
    this.getPaginationResults({ pageSize: this.pageSize, pageNumber: this.pageNumber, searchTerm: this.searchParams.searchTerm, sectionId: this.searchParams?.section?.id }).subscribe(
      (res: PaginationResponse<T>) => {
        this.pageSize = res.pageSize;
        this.pageNumber = res.pageNumber;
        this.totalPages = res.totalPages;
        this.hasNext = res.hasNext;
        this.hasPrevious = res.hasPrevious;
        this.objects = res.items;

        this.paginationService.updateData(this.objects);
      });
  }

  public nextPage(): void {
    this.pageNumber += this.pageNumber < this.totalPages ? 1 : 0;
    this.applyPaging();
  }

  public prevPage(): void {
    this.pageNumber -= this.pageNumber > 1 ? 1 : 0;
    this.applyPaging();
  }

  public goToPage(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.applyPaging();
  }

  public pagesToDisplay(pageNumber: number): number[] {
    return range(pageNumber - 1, pageNumber + 2);
  }

}
