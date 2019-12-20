import { Component, OnInit, Input } from '@angular/core';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { LoanDetail } from 'src/app/objects/dto/product/product-loanDetail-response';
// import { BaseComponent } from 'src/app/base/base.component';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { UtilsService } from 'src/app/services/common-services/utils.service';

@Component({
    selector: 'app-operating-financing',
    templateUrl: './operating-financing.component.html',
    styleUrls: ['./operating-financing.component.scss']
})
export class OperatingFinancingComponent implements OnInit {
    @Input() content: any;

    // 營運量-放款貿融第二層
    LoanDetail: any = {};
    totLoan: any = {};
    facilityDetail: any[];

    // urlList = [
    //     {
    //         'url': this.URL.PRODUCT_LOAN_DETAIL,
    //         'dtoRequset': CommonRequest,
    //         'dtoResponse': LoanDetail
    //     }
    // ];

    constructor(
        private custchartsService: CustChartsService,
        private utilsService: UtilsService
    ) {}

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.LoanDetail = this.custchartsService.LoanDetail;

        this.totLoan = this.LoanDetail.data.body.totLoan;
        this.facilityDetail = this.LoanDetail.data.body.facilityDetail;

        //日期轉換 20190330 return 2019/03/30
        for (let i = 0; i < this.facilityDetail.length; i++) {
            this.facilityDetail[i].facRecords[0].breakRecords.forEach((data, index) => {
                data.firstFundingDate = this.utilsService.changeDateStr(data.firstFundingDate, 'yyyy/MM/dd');
                data.acctDueDate = this.utilsService.changeDateStr(data.acctDueDate, 'yyyy/MM/dd')

                // console.log('xx', this.facilityDetail[0].facRecords);
            });
        }
    }

    setLoanDetailData(){

    }
}
