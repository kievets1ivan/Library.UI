import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@lib/common';
import { environment } from '@lib/environment';
import { Observable } from 'rxjs';

const userApiRequest = environment.API.user;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUser(): Observable<User> {
    return this.http.get<User>(`${userApiRequest}`, { withCredentials: true });
  }

  public updateUser(userToUpdate: User): Observable<User> {
    return this.http.put<User>(`${userApiRequest}`, userToUpdate, { withCredentials: true });
  }

}
