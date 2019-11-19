import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    minute = 10;    //timeout minute
    time = this.minute * 60000;

    /**
     * Jewel
     * setting timeout for 10 minutes
     * if timeout, clear session and redirect to timeout component
     */
    constructor(
        private injector: Injector,
        private router: Router,
        private dialog: MatDialog) {

    }

    ngOnInit() {
        sessionStorage.setItem('isTimeout', 'N');
        setTimeout(() => {
            sessionStorage.clear();
            this.dialog.closeAll();
            this.router.navigate(['timeout']);
        }, this.time);
    }
}
