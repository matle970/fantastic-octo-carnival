import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/base/base.component";
import { TimeoutService } from "src/app/services/common-services/timeout.service";

@Component({
    selector: 'app-timeout',
    templateUrl: './timeout.component.html',
    styleUrls: ['./timeout.component.scss']
})

export class TimeoutComponent extends BaseComponent implements OnInit {

    constructor(
        private timeoutservice: TimeoutService) {

        super()
    }

    // text
    TEXT = require('src/app/objects/text/text.json');

    msg = this.TEXT.timeout;

    ngOnInit() {
        this.timeoutservice.isTimeout = true;
    }
}

