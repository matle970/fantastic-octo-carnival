import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/base/base-component";

@Component({
    selector: 'app-timeout',
    template: `     
    <div class="time-out-block w-100">
        <h1 class="msg-block text-center text-danger display-5">{{msg}}</h1>
    </div>
    `,
    styles: [`
    .time-out-block {
        position: absolute;
        top: 50%;
        margin-top: -50px;
    }`]
})

export class TimeoutComponent extends BaseComponent implements OnInit{

    msg = '網頁已失效，請重新開啟！';
    
    ngOnInit(){
        sessionStorage.setItem('isTimeout', 'Y');
    }

}

