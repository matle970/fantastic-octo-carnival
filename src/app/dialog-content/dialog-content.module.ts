import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexNoticeComponent } from './index-notice/index-notice.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SharedItemModule } from '../shared-item/shared-item.module';
import { GroupInfoComponent } from './group-info/group-info.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { PersonRelativeComponent } from './person-relative/person-relative.component';
import { ManageInfoComponent } from './manage-info/manage-info.component';
import { ContributionComponent } from './contribution/contribution.component';
import { OperatingDepositComponent } from './operating-deposit/operating-deposit.component';
import { OperatingFinancingComponent } from './operating-financing/operating-financing.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedItemModule
  ],
  declarations: [
    IndexNoticeComponent,
    CompanyInfoComponent,
    GroupInfoComponent,
    PersonRelativeComponent,
    ManageInfoComponent,
    ContributionComponent,
    OperatingDepositComponent,
    OperatingFinancingComponent,
  ],
  exports: [
    IndexNoticeComponent,
    CompanyInfoComponent,
    GroupInfoComponent,
    PersonRelativeComponent,
    ManageInfoComponent,
    ContributionComponent,
    OperatingDepositComponent,
    OperatingFinancingComponent
  ],

})
export class DialogContentModule { }
