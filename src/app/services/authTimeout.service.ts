import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Jewel
 * read session
 * check session contain token, trustkey and via dashboard
 * else return to route path ''
 */
@Injectable()
export class AuthTimeout implements CanActivate {
    isTimeout: boolean;

    constructor(private router : Router){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;  
        return this.verifyTimeout(url);
    }

    verifyTimeout(url) : boolean{
        console.log('timeout session', sessionStorage.getItem('isTimeout'));
        if(sessionStorage.getItem('isTimeout') == 'Y'){
            this.router.navigate(['timeout']);
            return false;
        }
        else {
            return true;
        }
    }
}