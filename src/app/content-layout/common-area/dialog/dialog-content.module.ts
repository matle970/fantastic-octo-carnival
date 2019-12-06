import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { IndexNoticeComponent } from '../index-notice/index-notice.component';
import { CompanyInfoComponent } from '../../../customer/customer-child/cust-baseinfo/company-info/company-info.component';
import { SharedItemModule } from '../../../objects/shared-item/shared-item.module';
import { GroupInfoComponent } from '../../../customer/customer-child/cust-baseinfo/group-info/group-info.component';
import { SharedMaterialModule } from '../../../objects/shared-material/shared-material.module';
import { PersonRelativeComponent } from '../../../customer/customer-child/cust-baseinfo/person-relative/person-relative.component';
import { ManageInfoComponent } from '../../../customer/customer-child/cust-baseinfo/manage-info/manage-info.component';
import { ContributionInfoComponent } from '../../../customer/customer-child/cust-baseinfo/contribution-info/contribution-info.component';
import { OperatingDepositComponent } from '../../../customer/customer-child/cust-charts/operating-deposit/operating-deposit.component';
import { OperatingFinancingComponent } from '../../../customer/customer-child/cust-charts/operating-financing/operating-financing.component';
import { OperatingInoutComponent } from '../../../customer/customer-child/cust-charts/operating-inout/operating-inout.component';
import { OperatingTmuComponent } from '../../../customer/customer-child/cust-charts/operating-tmu/operating-tmu.component';
import { NewsInfoComponent } from '../../../customer/customer-child/cust-news/news-info/news-info.component';
import { BanksInfoComponent } from '../../../customer/customer-child/cust-news/banks-info/banks-info.component';
import { CustomPipeModule } from 'src/app/custom-pipe/custom-pipe.module';

@NgModule({
    imports: [
        CommonModule,
        NgApexchartsModule,
        SharedMaterialModule,
        SharedItemModule,
        CustomPipeModule
    ],
    declarations: [
        IndexNoticeComponent,
        CompanyInfoComponent,
        GroupInfoComponent,
        PersonRelativeComponent,
        ManageInfoComponent,
        ContributionInfoComponent,
        OperatingDepositComponent,
        OperatingFinancingComponent,
        OperatingInoutComponent,
        OperatingTmuComponent,
        NewsInfoComponent,
        BanksInfoComponent,
    ],
    exports: [
        IndexNoticeComponent,
        CompanyInfoComponent,
        GroupInfoComponent,
        PersonRelativeComponent,
        ManageInfoComponent,
        ContributionInfoComponent,
        OperatingDepositComponent,
        OperatingFinancingComponent,
        OperatingInoutComponent,
        OperatingTmuComponent,
        NewsInfoComponent,
        BanksInfoComponent
    ],

})
export class DialogContentModule { }
