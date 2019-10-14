import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNoticeComponent } from './index-notice/index-notice.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SharedItemModule } from '../shared-item/shared-item.module';
import { GroupInfoComponent } from './group-info/group-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedItemModule
  ],
  declarations: [
    IndexNoticeComponent,
    CompanyInfoComponent,
    GroupInfoComponent,
  ],
  exports: [
    IndexNoticeComponent,
    CompanyInfoComponent,
    GroupInfoComponent
  ],

})
export class DialogContentModule { }
