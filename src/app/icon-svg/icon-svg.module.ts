import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IconTransferComponent } from './icon-transfer/icon-transfer.component';
import { IconSalaryComponent } from './icon-salary/icon-salary.component';
import { IconBlacklistComponent } from './icon-blacklist/icon-blacklist.component';
import { IconCreditComponent } from './icon-credit/icon-credit.component';
import { IconNetbankComponent } from './icon-netbank/icon-netbank.component';
import { IconGroupcenterComponent } from './icon-groupcenter/icon-groupcenter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    IconTransferComponent,
    IconSalaryComponent,
    IconBlacklistComponent,
    IconCreditComponent,
    IconNetbankComponent,
    IconGroupcenterComponent
  ],
  exports: [
    IconTransferComponent,
    IconSalaryComponent,
    IconBlacklistComponent,
    IconCreditComponent,
    IconNetbankComponent,
    IconGroupcenterComponent
  ],

})
export class IconSvgModule { }
