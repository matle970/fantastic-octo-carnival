import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

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
import { OperatingInoutComponent } from './operating-inout/operating-inout.component';
import { OperatingTmuComponent } from './operating-tmu/operating-tmu.component';
import { NewsInfoComponent } from './news-info/news-info.component';
import { BanksInfoComponent } from './banks-info/banks-info.component';

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    SharedMaterialModule,
    SharedItemModule
  ],
  declarations: [
    CompanyInfoComponent,
    GroupInfoComponent,
    PersonRelativeComponent,
    ManageInfoComponent,
    ContributionComponent,
    OperatingDepositComponent,
    OperatingFinancingComponent,
    OperatingInoutComponent,
    OperatingTmuComponent,
    NewsInfoComponent,
    BanksInfoComponent,
  ],
  exports: [
    CompanyInfoComponent,
    GroupInfoComponent,
    PersonRelativeComponent,
    ManageInfoComponent,
    ContributionComponent,
    OperatingDepositComponent,
    OperatingFinancingComponent,
    OperatingInoutComponent,
    OperatingTmuComponent,
    NewsInfoComponent,
    BanksInfoComponent
  ],

})
export class DialogContentModule { }
