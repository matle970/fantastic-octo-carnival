

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // With this subject you can save the sidenav state and consumed later into other pages.
  public loadingStatus$: Subject<boolean> = new Subject();

  constructor() { }

}
