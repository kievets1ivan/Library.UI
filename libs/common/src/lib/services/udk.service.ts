import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@lib/environment';
import { Udk } from './../models/udk/udk';

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

}
