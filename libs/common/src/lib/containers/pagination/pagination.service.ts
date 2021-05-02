import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService<T> {

  private dataSource$ = new BehaviorSubject<T[]>(null);
  public data = this.dataSource$.asObservable();

  constructor() { }

  public updateData(data: T[]): void {
    this.dataSource$.next(data);
  }

}
