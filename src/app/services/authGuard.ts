import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router : Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;  
        return this.verifyLogin(url);
    }

    verifyLogin(url) : boolean{
        if(!this.isLoggedIn()){
            this.router.navigate(['']);
            return false;
        }
        else if(this.isLoggedIn()){
            return true;
        }
    }
    public isLoggedIn(): boolean{
        let status = false;
        console.log('token_id', sessionStorage.getItem('token_id'));
        console.log('is_allow', sessionStorage.getItem('is_allow'));
        if( sessionStorage.getItem('token_id') != null && sessionStorage.getItem('is_allow') == 'true'){
          status = true;
        }
        else{
          status = false;
        }
        return status;
    }
}