import { Section } from './../section/section';
import { PaginationQueryParams } from "./pagination-query-parameters";

export interface SearchDocumentQueryParams extends PaginationQueryParams {
  searchTerm: string;
  section?: Section;
}
