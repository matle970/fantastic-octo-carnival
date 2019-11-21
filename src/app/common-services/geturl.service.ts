import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GeturlService {

    constructor() { }

    // URLs
    private _URL: any = require('src/app/objects/url/url.json');

    get URL() {
        return this._URL;
    }
}
