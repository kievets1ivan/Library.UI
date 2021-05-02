import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Section } from '@lib/common';
import { environment } from '@lib/environment';
import { convertToHttpParams } from '@lib/utils';

const sectionApiRequest = environment.API.section;

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(
    private http: HttpClient,
  ) { }

  public getTopSections(isTopSection: boolean): Observable<Section[]> {
    const params = convertToHttpParams({ isTopSection });
    return this.http.get<Section[]>(`${sectionApiRequest}`, { withCredentials: true, params });
  }

}
