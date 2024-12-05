import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpamService {
  private isVisibleSubject$ = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject$.asObservable();
  message = '';

  constructor() {}

  openSpam(message: string) {
    this.isVisibleSubject$.next(true);
    this.message = message;
  }

  close(): void {
    this.isVisibleSubject$.next(false);
  }
}
