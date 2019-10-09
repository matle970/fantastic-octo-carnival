import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNoticeComponent } from './index-notice/index-notice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IndexNoticeComponent,
  ],
  exports: [
    IndexNoticeComponent,
  ],

})
export class DialogContentModule { }
