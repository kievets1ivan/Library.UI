import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { isNil } from 'lodash-es';

import { environment } from '@lib/environment';
import { Observable } from 'rxjs';

const imageApiRequest = environment.API.image;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  public getImage(fileName: string): SafeUrl {
    if (!isNil(fileName)) {
      return this.sanitizer.bypassSecurityTrustUrl(`${imageApiRequest}?fileName=${fileName}`);
    }
  }

  public uploadImages(files: File[]): Observable<string[]> {
    const formData = new FormData();
    for (const file of files) {
      formData.append('Files', file);
    }

    const options = {
      headers: new HttpHeaders().append('Content-Disposition', 'multipart/form-data'),
      withCredentials: true
    };

    return this.http.post<string[]>(`${imageApiRequest}`, formData, options);
  }
}
