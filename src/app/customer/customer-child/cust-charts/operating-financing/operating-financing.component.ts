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
    
    
    
    
    }

    loanDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "",
            "toLoan": {
                "toAmt": "",
                "toBal": ""
            },
            "facilityDetail": [
                {
                    "facilityNbr": "",
                    "facRecords": [
                        {
                            "breakdownCodeDesc": "",
                            "facmCurrencyCode": "",
                            "facmApprovalAmt": "",
                            "facmLoanBal": "",
                            "facmNtdLoanBal": "",
                            "negotiatPriceCode": "",
                            "collateral": [
                                {
                                    "collateralCodeDesc": ""
                                }
                            ],
                            "facStatusCodeDesc": "",
                            "breakRecords": [
                                {
                                    "accNbr": "",
                                    "lbCurrencyCode": "",
                                    "lbCurrentIntRate": "",
                                    "lbFxCurrentBal": "",
                                    "lbNtdCurrentBal": "",
                                    "firstFundingDate": "",
                                    "acctDueDate": "",
                                    "limitStatusCodeDesc": ""
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
