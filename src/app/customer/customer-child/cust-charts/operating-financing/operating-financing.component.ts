import { Component, OnInit, Input } from '@angular/core';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { LoanDetail } from 'src/app/objects/dto/product/product-loanDetail-response';
import { BaseComponent } from 'src/app/base/base.component';
import { ModalService } from 'src/app/services/common-services/modal.service';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';

@Component({
    selector: 'app-operating-financing',
    templateUrl: './operating-financing.component.html',
    styleUrls: ['./operating-financing.component.scss']
})
export class OperatingFinancingComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    // 營運量-放款貿融第二層
    LoanDetailObj: any = {};
   
    urlList = [
        {
            'url': this.URL.PRODUCT_LOAN_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': LoanDetail
        }
    ];

    constructor(
        private custchartsService: CustChartsService,
        private modalService: ModalService
    ) {
        super();
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        
        
        this.LoanDetailObj = this.custchartsService.LoanDetailObj;
        
        this.totLoan = this.LoanDetailObj.data.body.totLoan;
        this.facilityDetail = this.LoanDetailObj.data.body.facilityDetail;
        // this.facRecords = this.LoanDetailObj.data.body.facilityDetail;
        // this.facRecords = this.LoanDetailObj.data.body.facilityDetail;
        // console.log('xxx', this.facRecords[0]);
        // console.log('xxxx', this.facRecords[1]);
        


    }

    // loanDetail = {
    //     body: {
    //         customerId: "",
    //         totLoan: {
    //             totAmt: "",
    //             totBal: ""
    //         },
    //         facilityDetail: [
    //             {
    //                 facilityNbr: "",
    //                 facRecords: [
    //                     {
    //                         breakdownCodeDesc: "",
    //                         facmCurrencyCode: "",
    //                         facmApprovalAmt: "",
    //                         facmLoanBal: "",
    //                         facmNtdLoanBal: "",
    //                         negotiatPriceCode: "",
    //                         collateral: [
    //                             {
    //                                 collateralCodeDesc: ""
    //                             }
    //                         ],
    //                         facStatusCodeDesc: "",
    //                         breakRecords: [
    //                             {
    //                                 accNbr: "",
    //                                 lbCurrencyCode: "",
    //                                 lbCurrentIntRate: "",
    //                                 lbFxCurrentBal: "",
    //                                 lbNtdCurrentBal: "",
    //                                 firstFundingDate: "",
    //                                 acctDueDate: "",
    //                                 limitStatusCodeDesc: ""
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // }
    totLoan: {
        totAmt: "",
        totBal: ""
    }
    facilityDetail: any[];

    facRecords: any[];
}
