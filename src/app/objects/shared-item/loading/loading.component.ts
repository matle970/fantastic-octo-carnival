import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }
  hasResult = true;
  isResend = false;



  ngOnInit() {
    const nthis = this;
    setTimeout(function(){
      nthis.showResend(true);
    },1000)

  }


  showResend(resend: boolean) {
    this.isResend = resend;
  }

  showLoad(show: boolean) {
    this.hasResult = show;
  }

  // 顯示Load Block
  showLoadBlock() {
    this.showLoad(true);

    // 關閉重新整理畫面;顯示Loading畫面
    this.showResend(false);

  }

  // 隱藏Load Block
  hiddenLoadBlock() {
    this.showLoad(false);
  }

  // 顯示重新整理畫面
  showResendButton() {
    this.showLoad(true);

    this.showResend(true);
  }


}
