import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/base/base.component";

@Component({
    selector: 'app-timeout',
    templateUrl: './timeout.component.html',
    styleUrls: ['./timeout.component.scss']
})

export class TimeoutComponent extends BaseComponent implements OnInit {

    // text
    TEXT = require('src/app/objects/text/text.json');

    msg = this.TEXT.timeout;

    ngOnInit() {
        sessionStorage.setItem('isTimeout', 'Y');
    }
}

