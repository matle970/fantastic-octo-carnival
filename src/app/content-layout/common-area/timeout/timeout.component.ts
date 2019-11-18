import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/base/base.component";

@Component({
    selector: 'app-timeout',
    templateUrl: './timeout.component.html',
    styleUrls: ['./timeout.component.scss']
})

export class TimeoutComponent extends BaseComponent implements OnInit {
    msg = '網頁已失效，請重新開啟！';

    ngOnInit() {
        sessionStorage.setItem('isTimeout', 'Y');
    }
}

