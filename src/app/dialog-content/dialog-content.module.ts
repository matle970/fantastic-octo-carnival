import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNoticeComponent } from './index-notice/index-notice.component';
import { CompanyNoticeComponent } from './company-notice/company-notice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IndexNoticeComponent,
    CompanyNoticeComponent
  ],
  exports: [
    IndexNoticeComponent,
    CompanyNoticeComponent
  ],

})
export class DialogContentModule { }
