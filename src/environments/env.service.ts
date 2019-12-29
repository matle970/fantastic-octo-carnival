import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnvService {

    public apiUrl = window.location.hostname;

    constructor() { }
}
