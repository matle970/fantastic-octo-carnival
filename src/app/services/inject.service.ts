import { Injectable , Injector} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class InjectService {

  static injector: Injector;

  constructor() { }

  static getRouter(): Router {
    return InjectService.injector.get(Router);
  }
}
