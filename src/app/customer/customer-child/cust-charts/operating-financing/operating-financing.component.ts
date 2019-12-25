import { Component, OnInit, Input } from '@angular/core';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { LoanDetail } from 'src/app/objects/dto/product/product-loanDetail-response';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { UtilsService } from 'src/app/services/common-services/utils.service';

@Component({
    selector: 'app-operating-financing',
    templateUrl: './operating-financing.component.html',
    styleUrls: ['./operating-financing.component.scss']
})
export class OperatingFinancingComponent implements OnInit {
    @Input() content: any;

    //營運量第二層-放款貿融 html text
    text = this.custchartsService.baseservice.gettextservice.custchartstext;
    totLoan_text: string = this.text.totLoan_text;
    tot_text: string = this.text.tot_text;
    totAmt_text: string = this.text.totAmt_text;
    totBal_text: string = this.text.totBal_text;
    loanDetail_text: string = this.text.loanDetail_text;
    facilityNbr_text: string = this.text.facilityNbr_text;
    breakdownCodeDesc_text: string = this.text.breakdownCodeDesc_text;
    facdCurrencyCode_text: string = this.text.facdCurrencyCode_text;
    facdFxLimitAmt_text: string = this.text.facdFxLimitAmt_text;
    sumLbFxCurrentBal_text: string = this.text.sumLbFxCurrentBal_text;
    sumLbNtdCurrentBal_text: string = this.text.sumLbNtdCurrentBal_text;
    negotiatPriceCode_text: string = this.text.negotiatPriceCode_text;
    collateralCodeDesc_text: string = this.text.collateralCodeDesc_text;
    limitStatusCodeDesc_text: string = this.text.limitStatusCodeDesc_text;
    accNbr_text: string = this.text.accNbr_text;
    lbCurrencyCode_text: string = this.text.lbCurrencyCode_text;
    lbCurrentIntRate_text: string = this.text.lbCurrentIntRate_text;
    lbFxCurrentBal_text: string = this.text.lbFxCurrentBal_text;
    lbNtdCurrentBal_text: string = this.text.lbNtdCurrentBal_text;
    firstFundingDate_text: string = this.text.firstFundingDate_text;
    acctDueDate_text: string = this.text.acctDueDate_text;
    acctStatusCodeDesc_text: string = this.text.acctStatusCodeDesc_text;


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
    ) { }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.setLoanDetailData();
    }

    setLoanDetailData() {
        this.facilityDetail = this.custchartsService._facilityDetail;
        this.totLoan = this.custchartsService._totLoan;

        console.log('11', this.facilityDetail.length)
        console.log('22', this.facilityDetail[0].facRecords.length)
        console.log('33', this.facilityDetail[0].facRecords[0].breakRecords.length)
        //日期轉換 20190330 return 2019/03/30
        for (let i = 0; i < this.facilityDetail.length; i++) {
            this.facilityDetail[i].facRecords[0].breakRecords.forEach((data, index) => {
                data.firstFundingDate = this.utilsService.changeDateStr(data.firstFundingDate, 'yyyy/MM/dd');
                data.acctDueDate = this.utilsService.changeDateStr(data.acctDueDate, 'yyyy/MM/dd')
            });
        }
    }
}
