import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@lib/environment';
import { convertToHttpParams } from '@lib/utils';
import { LibraryDocument } from '../models/document/library-document';
import { SearchDocumentQueryParams } from '../models/query-parameters/search-document-query-parameters';
import { DocumentFilterQueryParams } from '../models/query-parameters/document-filter-query-params';
import { PaginationResponse } from '../models/pagination/pagination-response';

const documentApiRequest = environment.API.document;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: HttpClient,
  ) { }

  public getDocuments(config: DocumentFilterQueryParams = {}): Observable<LibraryDocument[]> {
    const params = convertToHttpParams(config);
    return this.http.get<LibraryDocument[]>(`${documentApiRequest}/query`, { withCredentials: true, params });
  }

  public getDocumentsBySearchParams(config: SearchDocumentQueryParams): Observable<PaginationResponse<LibraryDocument>> {
    const params = convertToHttpParams(config);
    return this.http.get<PaginationResponse<LibraryDocument>>(`${documentApiRequest}`, { withCredentials: true, params });
  }

  public getDocumentById(documentId: number): Observable<LibraryDocument> {
    return this.http.get<LibraryDocument>(`${documentApiRequest}/${documentId}`, { withCredentials: true });
  }

}
