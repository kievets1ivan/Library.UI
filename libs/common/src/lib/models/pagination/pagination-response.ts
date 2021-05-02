export interface PaginationResponse<T> {
  totalCount: number;
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: T[];
}
