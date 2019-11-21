import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';
import { TrustkeyServeice } from './trustkey.service';

/**
 * Jewel
 * read and check value contain token, trustkey and via dashboard
 * else return to route path ''
 */
@Injectable()

export class RoutingGuard implements CanActivate {

    constructor(
        private router: Router,
        private tokenservice: TokenService,
        private trustkeyservice: TrustkeyServeice) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url): boolean {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/timeout']);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    }

    isLoggedIn(): boolean {
        let status = false;
        let token = this.tokenservice.Token;
        let trustkey = this.trustkeyservice.Trustkey;

        if ( //token !== null && token !== 'undefined' &&
            trustkey !== null && trustkey !== 'undefined') {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    }
}