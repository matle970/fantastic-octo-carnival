import { Component, OnInit } from "@angular/core";
import { TimeoutService } from "src/app/services/common-services/timeout.service";

@Component({
    selector: 'app-timeout',
    templateUrl: './timeout.component.html',
    styleUrls: ['./timeout.component.scss']
})

export class TimeoutComponent implements OnInit {

    constructor(
        private timeoutservice: TimeoutService) {
    }

    // text
    TEXT = require('src/app/objects/text/text.json');

    msg = this.TEXT.timeout;

    ngOnInit() {
        this.timeoutservice.isTimeout = true;
    }
}

