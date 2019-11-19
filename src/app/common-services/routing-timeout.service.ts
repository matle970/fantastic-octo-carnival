import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TimeoutService } from './timeout.service';

/**
 * Jewel
 * read session
 * check session contain token, trustkey and via dashboard
 * else return to route path ''
 */
@Injectable()

export class RoutingTimeout implements CanActivate {

    constructor(
        private router: Router,
        private timeout: TimeoutService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyTimeout(url);
    }

    verifyTimeout(url): boolean {
        if (this.timeout.isTimeout) {
            this.router.navigate(['timeout']);
            return false;
        }
        else {
            return true;
        }
    }
}