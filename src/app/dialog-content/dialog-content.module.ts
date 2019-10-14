import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNoticeComponent } from './index-notice/index-notice.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SharedItemModule } from '../shared-item/shared-item.module';

@NgModule({
  imports: [
    CommonModule,
    SharedItemModule
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
