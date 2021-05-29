import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@lib/environment';
import { convertToHttpParams } from '@lib/utils';
import { Udk } from './../models/udk/udk';
import { PaginationQueryParams } from '../models/query-parameters/pagination-query-parameters';
import { PaginationResponse } from '../models/pagination/pagination-response';

const udkApiRequest = environment.API.udk;

@Injectable({
  providedIn: 'root'
})
export class UdkService {

  constructor(
    private http: HttpClient,
  ) { }

  public createUdk(udk: Udk): Observable<Udk> {
    return this.http.post<Udk>(`${udkApiRequest}`, udk, { withCredentials: true });
  }

  public getUdks(config: PaginationQueryParams): Observable<PaginationResponse<Udk>> {
    const params = convertToHttpParams(config);
    return this.http.get<PaginationResponse<Udk>>(`${udkApiRequest}`, { withCredentials: true, params });
  }

  public getUdksForAdmin(config: PaginationQueryParams): Observable<PaginationResponse<Udk>> {
    const params = convertToHttpParams(config);
    return this.http.get<PaginationResponse<Udk>>(`${udkApiRequest}/all`, { withCredentials: true, params });
  }

  public getUdkById(udkId: number): Observable<Udk> {
    return this.http.get<Udk>(`${udkApiRequest}/${udkId}`, { withCredentials: true });
  }

  public updateUdk(udkToUpdate: Udk): Observable<Udk> {
    return this.http.put<Udk>(`${udkApiRequest}`, udkToUpdate, { withCredentials: true });
  }

}
