import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/content-layout/common-area/dialog/dialog.component';
import { BaseComponent } from 'src/app/base/base.component';
import { plainToClass } from 'class-transformer';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
import { ModalService } from 'src/app/services/common-services/modal.service';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';

@Component({
    selector: 'app-cust-charts',
    templateUrl: './cust-charts.component.html',
    styleUrls: ['./cust-charts.component.scss']
})
export class CustChartsComponent extends BaseComponent implements OnInit {
    @ViewChild('chartDeposit') chartDeposit: ChartComponent;
    @ViewChild('chartLoad') chartLoad: ChartComponent;
    @ViewChild('chartTrade') chartTrade: ChartComponent;
    @ViewChild('chartTmu') chartTmu: ChartComponent;

    urlList = [
        {
            'url': this.URL.PRODUCT_ASSETS_LIBILITIES,
            'dtoRequset': CommonRequest,
            'dtoResponse': AssetsLibilities
        }
    ];


    ngOnInit() {
        this.sendRequest();

        // console.log(this);
        // this.allChartEnd();

        // const nthis = this;
        // setTimeout(function(){
        //   nthis.reRenderCharts();
        // },2000);
    }

    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            super.sendRequestAsync(
                this.urlList[i].url, 
                this.urlList[i].dtoRequset, 
                this.urlList[i].dtoResponse).then((resdata: any) => {

                // console.log('data', resdata.body[0]);
                // if (data.header.returnCode === '0000') {
                //     this.dataProcess(data, this.urlList[i].url);
                // }


                this.DepositData.series[0].data = resdata.body[0].depositBal;
                this.DepositData.xaxis.categories = this.getDataMonth(resdata.body[0].depositMon);

                this.LoanData.series[0].data = resdata.body[0].loanBal;
                this.LoanData.xaxis.categories = this.getDataMonth(resdata.body[0].loanMon);
                this.LoanData.series[1].data = resdata.body[0].tradeFinanceBal;

                this.TradeData.series[0].data = resdata.body[0].importAmt;
                this.TradeData.xaxis.categories = this.getDataMonth(resdata.body[0].importMon);
                this.TradeData.series[1].data = resdata.body[0].exportAmt;

                this.TmuData.series[0].data = resdata.body[0].tmuUsage;
                this.TmuData.xaxis.categories = this.getDataMonth(resdata.body[0].tmuMon);
                this.TmuData.series[1].data = resdata.body[0].mtmUsage;

            }, (err) => {

            });
        }

    }
    // 取得月份 format 201907, return 7
    getDataMonth(data: any) {
        const monthArry = [];
        data.forEach(value => {
            monthArry.push(parseInt(value.substring(4, 6), 10));
        });
        return monthArry;
    }


    //   dataProcess(data: any, url: string) {
    //     switch (url) {
    //         case this.URL.PRODUCT_ASSETS_LIBILITIES:
    //             this. = {
    //                 data: data
    //             };
    //             break;
    //     }
    // }

    apiUrls: string[] = []; // 此componment需要發送的API urls
    assetsLibilitiesText = this.TEXT.assetsLibilities;

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
                data: [100, 99, 98, 95, 70, 60, 65, 50, 55, 60, 45, 35, 40]
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
            categories:
                [201812, 201901, 201902, 201903, 201904, 201905, 201906, 201907, 201908, 201909, 201910, 201911, 201912]

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
                data: [900, 800, 1200, 1600, 1500, 1300, 1200, 800, 700, 1100, 1300, 1123, 1400]
            },
            {
                name: '貿融',
                data: [500, 700, 500, 600, 400, 300, 200, 100, 200, 300, 300, 423, 600]
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
                ['201812', '201901', '201902', '201903', '201904', '201905', '201906', '201907', '201908', '201909', '201910', '201911', '201912']

            ,

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
                data: [0.1, 0.5, 0.3, 0.5, 0.6, 0.7, 0.8, 0.9, 0.4, 0.3, 0.2, 0.5, 0.1]
            },
            {
                name: 'MTM',
                data: [0.2, 0.3, 0.5, 0.4, 0.5, 0.6, 0.7, 0.3, 0.5, 0.3, 0.2, 0.6, 0.7]
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
                ['201812', '201901', '201902', '201903', '201904', '201905', '201906', '201907', '201908', '201909', '201910', '201911', '201912']

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
                    const pnum = val * 100;
                    return (pnum + '%');
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
                data: [1000, 800, 1200, 1600, 1500, 1300, 1200, 800, 700, 1100, 1300, 1123, 1400]
            },
            {
                name: '出口',
                data: [500, 700, 500, 600, 400, 300, 200, 100, 200, 300, 300, 423, 600]
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
            categories: [

                ['201812', '201901', '201902', '201903', '201904', '201905', '201906', '201907', '201908', '201909', '201910', '201911', '201912']

            ],
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


    constructor(private modalService: ModalService, public dialog: MatDialog) {
        super();
    }

    // ngOnInit() {
    // allChartEnd() {
    //   this.chartDeposit.destroy();
    //   this.chartLoad.destroy();
    //   this.chartTrade.destroy();
    //   this.chartTmu.destroy();
    // };
    // reRenderCharts() {
    //   this.chartDeposit.render();
    //   this.chartLoad.render();
    //   this.chartTrade.render();
    //   this.chartTmu.render();
    // }
    //}

    /**
    * 暫用此方法寫
    * @param modalId 開啟modal的方式
    */
    openDialog(modalId: number, wide?: boolean) {
        const openId = modalId ? modalId : 8;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;

        dialogConfig.data = {
            id: openId,
            title: '',
            content_data: {}
        };

        if (wide) {
            dialogConfig.panelClass = 'open-table-wide';
        } else {
            dialogConfig.panelClass = 'open-table-narrow';
        }

        switch (openId) {
            case 8:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = '存款餘額';
                break;
            case 9:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = '放款餘額 / 貿融餘額';
                break;
            case 10:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = '進口 / 出口';
                break;
            case 11:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = 'TMU / MTM';
                break;

            default:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = 'defalut no data';
                break;
        }

        this.dialog.open(DialogComponent, dialogConfig);
    }

    /**
         * 之後有時間再詳寫此功能
         * @param mid
         */
    openModal(mid: string) {
        this.modalService.openModal(mid);
    }

    /*******************
       * 取得基本資訊所有的API Urls
       * @param param : api所需的參數值
       ********************/
    getBaseInfoApiUrls() {
        const urls = this.URL.assetsLibilites.Layer1;
        Object.keys(urls).forEach(value => {
            console.log(urls[value]);
            this.apiUrls.push(urls[value]);
        });
    }
    /*******************
    * 準備發送的API request Obj
    * {'url': string, 'param': param}
    * @param param : api所需的參數值
    ********************/
    prepareBaseInfoApiRequest(urls: string[], param: any) {

        const requestParam = [];
        urls.forEach(value => {
            requestParam.push({ 'url': value, 'param': param });
        });
        console.log(requestParam);
        return requestParam;
    }

    /*******************
     * 發送API取得基本資料
     * *****************/
    getChartsData(request: any) {
        request.forEach(value => {
            this.getRequestData(value.url, value.param).then((response: any) => {
                this.setCharts(value.url, plainToClass(CommonResponse, response));
            }).catch((error: any) => {
                console.log('error' + error);
            });
        });
    }

    /*******************
     * 依各個 URL 塞各自的資料
     * *****************/
    setCharts(url: string, response: any) {
        console.log('set', response);
        const status = response.header.returnCode;
        const data = response.body;
        if (status === '0000') {
            switch (url) {
                case this.URL.assetsLibilities.Layer1.getCBDeposit:
                    console.log('存款');
                    this.setDepositData(data);
                    break;
                case this.URL.assetsLibilities.Layer1.getCBLoan:
                    console.log('放款');
                    this.setLoanData(data);
                    break;
                case this.URL.assetsLibilities.Layer1.getCBTrade:
                    console.log('進出口');
                    this.setTradeData(data);
                    break;
                case this.URL.assetsLibilities.Layer1.getCBTmu:
                    console.log('TMU');
                    this.setTmuData(data);
                    break;
                default:
                    console.log('url not found');
                    break;
            }
        }
    }


    //塞存款資料
    setDepositData(data: any) {
        //取得存款資料，每個值存成array
        console.log('deposit', data);
        const series: number[] = [];
        const xaxis: string[] = [];
        for (let i = 1; i < 14; i++) {
            xaxis.push(data['depositMon']);
            series.push(data['depositBal']);
        }

        console.log('deposit2', xaxis);
        console.log(series);

        this.DepositData.xaxis.categories[0]['categories'] = xaxis;
        this.DepositData.series[0]['data'] = series;

        this.chartDeposit.destroy();
        this.chartDeposit.render();
    };

    //塞放款貿融資料
    setLoanData(data: any) {
        //取得放款貿融資料，每個值存成array
        const series: number[] = [];
        const series1: number[] = [];
        const xaxis: string[] = [];

        for (let i = 1; i < 14; i++) {
            xaxis.push(data['loanMon']);
            series.push(data["loanBal"]);
            series1.push(data['tradeFinanceBal']);

        }
        console.log(xaxis);
        console.log(series);
        console.log(series1);


        this.LoanData.xaxis.categories['loanMon'] = xaxis;
        this.LoanData.series[0]['data'] = series;
        this.LoanData.series[1]['data'] = series1;

        this.chartLoad.destroy();
        this.chartLoad.render();
    };

    // //塞進出口資料
    setTradeData(data: any) {
        //取得進出口資料，每個值存成array
        const series: number[] = [];
        const series1: number[] = [];
        const xaxis: string[] = [];
        for (let i = 1; i < 14; i++) {
            xaxis.push(data['importMon']);
            series.push(data['importAmt']);
            series1.push(data['exportAmt']);

        }
        console.log(xaxis);
        console.log(series);
        console.log(series1);

        this.TradeData.xaxis.categories[0]['categories'] = xaxis;
        this.TradeData.series[0]['data'] = series;
        this.TradeData.series[1]['data'] = series1;

        this.chartTrade.destroy();
        this.chartTrade.render();
    };

    //塞TMU&MTM資料
    setTmuData(data: any) {
        //取得放款貿融資料，每個值存成array
        const series: number[] = [];
        const series1: number[] = [];
        const xaxis: string[] = [];
        for (let i = 1; i < 14; i++) {
            xaxis.push(data['tmuMon']);
            series.push(data['tmuUsage']);
            series1.push(data['mtmUsage']);

        }
        console.log(xaxis);
        console.log(series);
        console.log(series1);

        this.TmuData.xaxis.categories[0]['categories'] = xaxis;
        this.TmuData.series[0]['data'] = series;
        this.TmuData.series[1]['data'] = series1;

        this.chartTmu.destroy();
        this.chartTmu.render();
    };

}

