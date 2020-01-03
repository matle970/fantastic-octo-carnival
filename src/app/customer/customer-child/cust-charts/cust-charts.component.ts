import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/content-layout/common-area/dialog/dialog.component';
import { plainToClass } from 'class-transformer';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';

@Component({
    selector: 'app-cust-charts',
    templateUrl: './cust-charts.component.html',
    styleUrls: ['./cust-charts.component.scss']
})
export class CustChartsComponent implements OnInit {
    @Input() content: any;

    // urlList = [
    //     {
    //         'url': this.URL.PRODUCT_ASSETS_LIBILITIES,
    //         'dtoRequset': CommonRequest,
    //         'dtoResponse': AssetsLibilities
    //     }
    // ];

    //營運量第一層 html text
    text = this.custchartsService.baseservice.gettextservice.custchartstext;
    assetslibilities_text: string = this.text.assetslibilities_text;
    deposit_text: string = this.text.deposit_text;
    loan_text: string = this.text.loan_text;
    tradeFinance_text: string = this.text.tradeFinance_text;
    import_text: string = this.text.import_text;
    export_text: string = this.text.export_text;
    tmu_text: string = this.text.tmu_text;
    mtm_text: string = this.text.mtm_text;


    // show status
    public hideBlock: boolean;
    public loadingStatus: boolean;
    public hasResult: boolean; // 是否查到 客戶id
    public nodata: string;


    // response
    // 營運量-營運量第一層
    AssetsLibilities: any = {};
    // 營運量-存款餘額第二層
    currentValue: any = {};
    DepositDetail: any = {};
    // 營運量-放款餘額第二層
    LoanDetail: any = {};
    // 營運量-進出口實績第二層
    ImportExportDetail: any = {};
    // 營運量-TMU額度第二層
    TMUDetail: any = {};

    //TMU Y軸
    theYaxisTmu = {
        show: true,
        labels: {
            // opposite: true,
            // tickAmount: 1,
            // steps: [1,2,3,4,5,6,7,8,9,10],
            
            show: true,
            minWidth: 36,
            maxWidth: 36,
            // tickAmount: ,
            style: {
                fontSize: '0.8rem',
            },
            formatter: function (val) {
                return val ? val.toFixed(1) * 100 + '%' : '';
            }
        }
    }
    //圖表資訊 - 存款
    DepositData = {
        chart: {
            fontFamily: '微軟正黑體',
            toolbar: {
                show: false
            },
            height: 220,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#003049'],
        series: [
            {
                name: '存款',
                data: []
            }
        ],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 1
            }
        },
        xaxis: {
            categories: [],
            labels: {}
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '0.8rem',
                }
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true, // 只有一個也要出現 (為了美觀，使用者要整齊)
            onItemClick: {
                toggleDataSeries: false  // 只有一個不讓使用者按，不然資料會不見了
            },
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#000000',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    const pnum = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return pnum;
                },
            }
        }

    };
    // 圖表資訊-放款貿融
    LoanData = {
        chart: {
            fontFamily: '微軟正黑體',
            height: 220,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#09558a', '#0887b1'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        series: [
            {
                name: '放款',
                data: []
            },
            {
                name: '貿融',
                data: []
            }
        ],
        title: {
            text: 'Average High & Low Temperature',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        markers: {
            size: 6
        },
        xaxis: {
            categories: [],
            labels: {
                // user 要部份隱藏，但圖表要顯示，目前無法做到
                // 兩邊會一起隱藏，先不做

                // formatter: function(val,timestamp,index) {
                //   if( (val%2) === 0) {
                //     return '';
                //   } else {
                //     return val;
                //   }
                // }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '0.8rem',
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#000000',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    const pnum = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return pnum;
                },
            }
        }
    };
    // 圖表資訊-進出口
    TradeData = {
        chart: {
            fontFamily: '微軟正黑體',
            height: 220,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#045960', '#08a08a'],
        dataLabels: {
            enabled: false,
            formatter: function (val) {
                return val ? val.toFixed(1) + '%' : ''
            }
        },
        stroke: {
            curve: 'smooth'
        },
        series: [
            {
                name: '進口',
                data: []
            },
            {
                name: '出口',
                data: []
            }
        ],
        title: {
            text: 'Average High & Low Temperature',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        markers: {
            size: 6
        },
        xaxis: {
            categories:
                []
            ,
            labels: {

            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '0.8rem',
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#000000',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    const pnum = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return pnum;
                },
            }
        }
    };
    // 圖表資訊-TMU&MTM
    TmuData = {
        chart: {
            fontFamily: '微軟正黑體',
            height: 220,
            type: 'line',
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#f77f00', '#fbc93e'],

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        series: [
            {
                name: 'TMU',
                data: []
            },
            {
                name: 'MTM',
                data: []
            }
        ],
        title: {
            text: 'Average High & Low Temperature',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        markers: {
            size: 6
        },
        xaxis: {
            min: undefined,
            max: undefined,
            categories:
            []
            ,
            labels: {

            }
        },
        yaxis: this.theYaxisTmu,
              
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#000000',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    const pnum = Math.round(val * 10000) / 100
                    return pnum + '%';

                },
            }
        }
    };

    constructor(
        private custchartsService: CustChartsService,
        // private _hideblockService: HideBlockService,
        // private _loadingService: LoadingService,
        // private _statusService: StatusService
    ) {
    }
    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.setResponse();
        this.setDepositChartsData();
        this.setLoanChartsData();
        this.setTradeChartsData();
        this.setTmuChartsData();
    }
    setResponse() {
        this.AssetsLibilities = this.custchartsService.AssetsLibilities;
        this.DepositDetail = this.custchartsService.DepositDetail;
        this.LoanDetail = this.custchartsService.LoanDetail;
        this.ImportExportDetail = this.custchartsService.ImportExportDetail;
        this.TMUDetail = this.custchartsService.TMUDetail;

    }

    setDepositChartsData() {
        this.DepositData.series[0].data = this.custchartsService.DepositDataseries;
        this.DepositData.xaxis.categories = this.custchartsService.DepositDatacategories;
        this.currentValue = this.custchartsService._currentValue;
    }

    setLoanChartsData() {
        this.LoanData.series[0].data = this.custchartsService.LoanDataseries;
        this.LoanData.series[1].data = this.custchartsService.TradeFinanceDataseries;
        this.LoanData.xaxis.categories = this.custchartsService.LoanDatacategories;

    }

    setTradeChartsData() {
        this.TradeData.series[0].data = this.custchartsService.ImportDataseries;
        this.TradeData.series[1].data = this.custchartsService.ExportDataseries;
        this.TradeData.xaxis.categories = this.custchartsService.ImportDatacategories;
    }

    setTmuChartsData() {
        this.TmuData.series[0].data = this.custchartsService.TmuDataseries;
        this.TmuData.series[1].data = this.custchartsService.MtmDataseries;
        this.TmuData.xaxis.categories = this.custchartsService.TmuDatacategories;
    }
    // /**
    // * 暫用此方法寫
    // * @param modalId 開啟modal的方式
    // */
    // openDialog(modalId: number, wide?: boolean) {
    //     const openId = modalId ? modalId : 8;
    //     const dialogConfig = new MatDialogConfig();
    //     dialogConfig.autoFocus = false;

    //     dialogConfig.data = {
    //         id: openId,
    //         title: '',
    //         content_data: {}
    //     };

    //     if (wide) {
    //         dialogConfig.panelClass = 'open-table-wide';
    //     } else {
    //         dialogConfig.panelClass = 'open-table-narrow';
    //     }

    //     switch (openId) {
    //         case 8:
    //             dialogConfig.data.content_data = [];
    //             dialogConfig.data.title = '存款餘額';
    //             break;
    //         case 9:
    //             dialogConfig.data.content_data = [];
    //             dialogConfig.data.title = '放款餘額 / 貿融餘額';
    //             break;
    //         case 10:
    //             dialogConfig.data.content_data = [];
    //             dialogConfig.data.title = '進口 / 出口';
    //             break;
    //         case 11:
    //             dialogConfig.data.content_data = [];
    //             dialogConfig.data.title = 'TMU / MTM';
    //             break;
    //         default:
    //             dialogConfig.data.content_data = [];
    //             dialogConfig.data.title = 'defalut no data';
    //             break;
    //     }

    //     this.dialog.open(DialogComponent, dialogConfig);
    // }

    /**
    * @param modalId 開啟modal的方式
    */


    apiUrls: string[] = []; // 此componment需要發送的API urls

    /**
     * 之後有時間再詳寫此功能
     * @param mid
     */
    openModal(mid: string) {
        // this.modalservice.openModal(mid);

    }
    /*******************
       * 取得基本資訊所有的API Urls
       * @param param : api所需的參數值
       ********************/
    // getBaseInfoApiUrls() {
    //     const urls = this.URL.assetsLibilites.Layer1;
    //     Object.keys(urls).forEach(value => {
    //         console.log(urls[value]);
    //         this.apiUrls.push(urls[value]);
    //     });
    // }
    /*******************
    * 準備發送的API request Obj
    * {'url': string, 'param': param}
    * @param param : api所需的參數值
    ********************/
    // prepareBaseInfoApiRequest(urls: string[], param: any) {

    //     const requestParam = [];
    //     urls.forEach(value => {
    //         requestParam.push({ 'url': value, 'param': param });
    //     });
    //     return requestParam;
    // }

    /*******************
     * 發送API取得基本資料
     * *****************/
    //  getChartsData(request: any) {
    //      request.forEach(value => {
    //          this.getRequestData(value.url, value.param).then((response: any) => {
    //              this.setCharts(value.url, plainToClass(CommonResponse, response));
    //          }).catch((error: any) => {
    //              console.log('error' + error);
    //          });
    //      });
    //  }

    /*******************
     * 依各個 URL 塞各自的資料
     * *****************/
    // setCharts(url: string, response: any) {
    //     console.log('set', response);
    //     const status = response.header.returnCode;
    //     const data = response.body;
    //     if (status === '0000') {
    //         switch (url) {
    //             case this.URL.assetsLibilities.Layer1.getCBDeposit:
    //                 console.log('存款');
    //                 this.setDepositData(data);
    //                 break;
    //             case this.URL.assetsLibilities.Layer1.getCBLoan:
    //                 console.log('放款');
    //                 this.setLoanData(data);
    //                 break;
    //             case this.URL.assetsLibilities.Layer1.getCBTrade:
    //                 console.log('進出口');
    //                 this.setTradeData(data);
    //                 break;
    //             case this.URL.assetsLibilities.Layer1.getCBTmu:
    //                 console.log('TMU');
    //                 this.setTmuData(data);
    //                 break;
    //             default:
    //                 console.log('url not found');
    //                 break;
    //         }
    //     }
    // }


    //塞存款資料
    // setDepositData(data: any) {
    //     //取得存款資料，每個值存成array
    //     console.log('deposit', data);
    //     const series: number[] = [];
    //     const xaxis: string[] = [];
    //     for (let i = 1; i < 14; i++) {
    //         xaxis.push(data['depositMon']);
    //         series.push(data['depositBal']);
    //     }

    //     this.DepositData.xaxis.categories[0]['categories'] = xaxis;
    //     this.DepositData.series[0]['data'] = series;

    //     this.chartDeposit.destroy();
    //     this.chartDeposit.render();
    // };

    //塞放款貿融資料
    // setLoanData(data: any) {
    //     //取得放款貿融資料，每個值存成array
    //     const series: number[] = [];
    //     const series1: number[] = [];
    //     const xaxis: string[] = [];

    //     for (let i = 1; i < 14; i++) {
    //         xaxis.push(data['loanMon']);
    //         series.push(data["loanBal"]);
    //         series1.push(data['tradeFinanceBal']);

    //     }
    //     this.LoanData.xaxis.categories['loanMon'] = xaxis;
    //     this.LoanData.series[0]['data'] = series;
    //     this.LoanData.series[1]['data'] = series1;

    //     this.chartLoad.destroy();
    //     this.chartLoad.render();
    // };

    //塞進出口資料
    // setTradeData(data: any) {
    //     //取得進出口資料，每個值存成array
    //     const series: number[] = [];
    //     const series1: number[] = [];
    //     const xaxis: string[] = [];
    //     for (let i = 1; i < 14; i++) {
    //         xaxis.push(data['importMon']);
    //         series.push(data['importAmt']);
    //         series1.push(data['exportAmt']);

    //     }
    //     this.TradeData.xaxis.categories[0]['categories'] = xaxis;
    //     this.TradeData.series[0]['data'] = series;
    //     this.TradeData.series[1]['data'] = series1;

    //     this.chartTrade.destroy();
    //     this.chartTrade.render();
    // };

    //塞TMU&MTM資料
    // setTmuData(data: any) {
    //     //取得放款貿融資料，每個值存成array
    //     const series: number[] = [];
    //     const series1: number[] = [];
    //     const xaxis: string[] = [];
    //     for (let i = 1; i < 14; i++) {
    //         xaxis.push(data['tmuMon']);
    //         series.push(data['tmuUsage']);
    //         series1.push(data['mtmUsage']);

    //     }
    //     this.TmuData.xaxis.categories[0]['categories'] = xaxis;
    //     this.TmuData.series[0]['data'] = series;
    //     this.TmuData.series[1]['data'] = series1;

    //     this.chartTmu.destroy();
    //     this.chartTmu.render();
    // };

    openDialog(modalId: number, wide?: boolean) {
        this.custchartsService.openDialog(modalId, wide);
    }
}
