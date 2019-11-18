import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/**
 * Jewel
 * read session
 * check session contain token, trustkey and via dashboard
 * else return to route path ''
 */
@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;  
        return this.verifyLogin(url);
    }

    verifyLogin(url) : boolean{
        if(!this.isLoggedIn()){
            this.router.navigate(['/content/dashboard']);
            return false;
        }
        else if(this.isLoggedIn()){
            return true;
        }
    }

    public isLoggedIn(): boolean{
        let status = false;
        let token = sessionStorage.getItem('token');
        let trust = sessionStorage.getItem('trustKey');


        if( //token != null && token != 'undefined' &&
            trust != null && trust != 'undefined' &&
            sessionStorage.getItem('is_allow') == 'true' ){
          status = true;
        }
        else{
          status = false;
        }
        return status;
    }
}