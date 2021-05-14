import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@lib/environment';
import { PublicationPeriods } from './../models/publications/publication-periods';

const publicationPeriodsApiRequest = environment.API.publicationPeriods;


@Injectable({
  providedIn: 'root'
})
export class PublicationPeriodsService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<PublicationPeriods[]> {
    return this.http.get<PublicationPeriods[]>(`${publicationPeriodsApiRequest}`, { withCredentials: true });
  }
}
