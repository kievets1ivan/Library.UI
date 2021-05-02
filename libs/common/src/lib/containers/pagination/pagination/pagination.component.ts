import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { range } from 'lodash-es';

import { PaginationService } from '../../pagination/pagination.service';
import { PaginationResponse } from '../../../models/pagination/pagination-response';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent<T> implements OnInit {

  public objects: T[];
  public pageNumber = 1;
  public pageSize = 5;
  public totalPages: number;
  public hasNext = false;
  public hasPrevious = false;
  private _searchTerm = '';

  @Input() getPaginationResults: (config?: {}) => Observable<PaginationResponse<T>>;

  @Input() set searchTerm(value: string) {
    this._searchTerm = value;
    this.applyPaging();
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  constructor(
    private paginationService: PaginationService<T>
  ) { }

  public ngOnInit(): void {
    this.applyPaging();
  }

  public applyPaging(): void {
    this.getPaginationResults({ pageSize: this.pageSize, pageNumber: this.pageNumber, searchTerm: this.searchTerm }).subscribe(
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
    return range(pageNumber - 2, pageNumber + 3);
  }

}
