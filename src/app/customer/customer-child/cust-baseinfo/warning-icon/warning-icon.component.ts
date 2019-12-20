import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-warning-icon',
    templateUrl: './warning-icon.component.html',
    styleUrls: ['./warning-icon.component.scss']
})
export class WarningIconComponent implements OnInit {
    @Input() alert: number;
    constructor() { }

    ngOnInit() {
    }

}
