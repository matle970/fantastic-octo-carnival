import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNoticeComponent } from './index-notice/index-notice.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IndexNoticeComponent,
    CompanyInfoComponent,
  ],
  exports: [
    IndexNoticeComponent,
    CompanyInfoComponent
  ],

})
export class DialogContentModule { }
