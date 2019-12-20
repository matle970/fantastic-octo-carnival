import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response';
import { LoanDetail } from 'src/app/objects/dto/product/product-loanDetail-response';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';
import { TMUDetail } from 'src/app/objects/dto/product/product-tmuDetail-response';
import { MatDialog } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class CustChartsService {

    constructor(
        public baseservice: BaseService,
        public dialog: MatDialog
    ) { }

    urlList = [
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES,
            'dtoRequest': CommonRequest,
            'dtoResponse': AssetsLibilities
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_DEPOSIT_DETAIL,
            'dtoRequest': CommonRequest,
            'dtoResponse': DepositDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_LOAN_DETAIL,
            'dtoRequest': CommonRequest,
            'dtoResponse': LoanDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
            'dtoRequest': CommonRequest,
            'dtoResponse': ImportExportDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_TMU_DETAIL,
            'dtoRequest': CommonRequest,
            'dtoResponse': TMUDetail
        }

    ];

    // 營運量-營運量第一層
    AssetsLibilities: any = {};
    // 營運量-存款餘額第二層
    DepositDetail: any = {};
    // 營運量-放款餘額第二層
    LoanDetail: any = {};
    // 營運量-進出口實績第二層
    ImportExportDetail: any = {};
    // 營運量-TMU額度第二層
    TMUDetail: any = {};

    //存款餘額
    DepositDataseries: Array<any> = [];
    DepositDatacategories: Array<any> = [];

    //放款貿融餘額
    LoanDataseries: Array<any> = [];
    TradeFinanceDataseries: Array<any> = [];
    LoanDatacategories: Array<any> = [];
    tradeFinanceDatacategories: Array<any> = [];

    //進出口餘額
    ImportDataseries: Array<any> = [];
    ExportDataseries: Array<any> = [];
    ImportDatacategories: Array<any> = [];
    ExportDatacategories: Array<any> = [];

    //TMU&MTM餘額
    TmuDataseries: Array<any> = [];
    MtmDataseries: Array<any> = [];
    TmuDatacategories: Array<any> = [];
    MtmDatacategories: Array<any> = [];

    //存款第二層
    _ntdAssets: any = {};
    _fxAssets: any = {};
    _sumAssets: any = {};
    _r6mthAvgBal: any = {};
    _sdDetail: Array<any> = [];
    _tdDetail: Array<any> = [];
    _cdDetail: Array<any> = [];

    //放款貿融第二層

    //進出口第二層
    _import: Array<any> = [];
    _export: Array<any> = [];
    inTotal: Array<any> = [];
    incolumnTotal: Array<any> = [];
    outTotal: Array<any> = [];
    outcolumnTotal: Array<any> = [];

    //TMU&MTM第二層
    _tmuTransAmt: Array<any> = [];
    _tmuInvesment: Array<any> = [];
    _tmuContribution: Array<any> = [];


    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.baseservice.httpservice.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequest,
                this.urlList[i].dtoResponse).then(data => {
                    if (data.header.returnCode === '0000') {
                        this.dataProcess(data, this.urlList[i].url);
                    }
                });
        }
    }

    dataProcess(data: any, url: string) {
        switch (url) {
            case this.baseservice.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES:
                this.AssetsLibilities = {
                    data: data.body
                };
                this.setDepositData(this.AssetsLibilities);
                this.setLoanData(this.AssetsLibilities);
                this.setTradeData(this.AssetsLibilities);
                this.setTmuData(this.AssetsLibilities);

                break;
            case this.baseservice.geturlservice.URL.PRODUCT_DEPOSIT_DETAIL:
                this.DepositDetail = {
                    data: data.body
                };
                this.setDepositDetailData(this.DepositDetail);
                break;
            case this.baseservice.geturlservice.URL.PRODUCT_LOAN_DETAIL:
                this.LoanDetail = {
                    data: data.body
                };
                this.setLoanDetailData(this.LoanDetail);
                break;
            case this.baseservice.geturlservice.URL.PRODUCT_IMPORT_EXPORT_DETAIL:
                this.ImportExportDetail = {
                    data: data.body
                };
                this.setImportExportDetailData(this.ImportExportDetail);
                break;
            case this.baseservice.geturlservice.URL.PRODUCT_TMU_DETAIL:
                this.TMUDetail = {
                    data: data.body
                };
                this.setTMUDetailData(this.TMUDetail);
                break;
        }
    }

    setDepositData(depositData) {
        this.DepositDatacategories = this.getDataMonth(depositData.data[0].depositMon);
        this.DepositDataseries = depositData.data[0].depositBal;

    }

    setLoanData(loanData) {
        this.LoanDatacategories = this.getDataMonth(loanData.data[0].loanMon);
        this.LoanDataseries = loanData.data[0].loanBal;
        this.TradeFinanceDataseries = loanData.data[0].tradeFinanceBal;
        this.LoanDatacategories = this.getDataMonth(loanData.data[0].tradeFinanceMon);
    }

    setTradeData(tradeData) {
        this.ImportDatacategories = this.getDataMonth(tradeData.data[0].importMon);
        this.ImportDataseries = tradeData.data[0].importAmt;
        this.ExportDataseries = tradeData.data[0].exportAmt;
        this.ExportDatacategories = this.getDataMonth(tradeData.data[0].exportMon);
    }

    setTmuData(tmuData) {
        this.TmuDatacategories = this.getDataMonth(tmuData.data[0].tmuMon);
        this.TmuDataseries = tmuData.data[0].tmuUsage;
        this.MtmDataseries = tmuData.data[0].mtmUsage;
        this.MtmDatacategories = this.getDataMonth(tmuData.data[0].mtmMon);
    }

    setDepositDetailData(depositDetailData) {
        this._ntdAssets = depositDetailData.data.assets.ntdAssets;
        this._fxAssets = depositDetailData.data.assets.fxAssets;
        this._sumAssets = depositDetailData.data.assets.sumAssets;
        this._r6mthAvgBal = depositDetailData.data.assets.r6mthAvgBal;

        this._sdDetail = depositDetailData.data.sdDetail;
        this._tdDetail = depositDetailData.data.tdDetail;
        this._cdDetail = depositDetailData.data.cdDetail;

    }

    setLoanDetailData(loanDetailData) {

    }

    setImportExportDetailData(importExportDetailData) {
        // this.incolumnTotal = [];
        // this._import = [];
        // this._export = [];
        this._import = importExportDetailData.data.import;
        this._export = importExportDetailData.data.export;

        // 進口實績-橫向加總&縱向加總

        for (let i = 0; i < this._import.length; i++) {
            let column1 = this._import[i].usdTxnAmt.map(Number);
            let column2 = this.SumData(column1);
            console.log('zz',column2)
            this._import[i].column = column2;
            this.incolumnTotal.push(column2)
            //   console.log('xx',this.incolumnTotal)
        }
        let usdTxnAmt = [];
        let insumTotal = [];
        this.inTotal = insumTotal;
        this._import.forEach(element => {
            usdTxnAmt.push(element.usdTxnAmt);

        });
        usdTxnAmt.forEach((element, index) => {
            element.forEach((value, index) => {
                if (typeof (insumTotal[index]) === 'undefined') {
                    insumTotal[index] = parseInt(value, 10);
                } else {
                    let sum = insumTotal[index];
                    insumTotal[index] = sum + parseInt(value, 10);
                }
            });
        });

        // 出口實績-橫向加總&縱向加總
        for (let i = 0; i < this._export.length; i++) {
            let column1 = this._export[i].usdTxnAmt.map(Number);
            let column2 = this.SumData(column1);
            // let column3 = column2.toString();
            this._export[i].column = column2;
            this.outcolumnTotal.push(column2)
        }
        let exusdTxnAmt = [];
        let outsumTotal = [];
        this.outTotal = outsumTotal;
        this._export.forEach(element => {
            exusdTxnAmt.push(element.usdTxnAmt);

        });
        exusdTxnAmt.forEach((element, index) => {
            element.forEach((value, index) => {
                if (typeof (outsumTotal[index]) === 'undefined') {
                    outsumTotal[index] = parseInt(value, 10);
                } else {
                    let sum = outsumTotal[index];
                    outsumTotal[index] = sum + parseInt(value, 10);
                }
            });
        });
    }

    setTMUDetailData(tMUDetailData) {
        this._tmuTransAmt = tMUDetailData.data.tmuTransAmt;
        this._tmuInvesment = tMUDetailData.data.tmuInvesment;
        let Tmu = Object.values(tMUDetailData.data.tmuContribution);
        this._tmuContribution = Tmu.map(Number);

    }

    // 取得月份 format 201907, return 7
    getDataMonth(data: any) {
        const monthArry = [];
        data.forEach(value => {
            monthArry.push(parseInt(value.substring(4, 6), 10));
        });
        return monthArry;
    }
    //加總
    SumData(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }
}
