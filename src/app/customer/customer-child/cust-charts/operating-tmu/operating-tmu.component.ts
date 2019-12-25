import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { TMUDetail } from 'src/app/objects/dto/product/product-tmuDetail-response';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { UtilsService } from 'src/app/services/common-services/utils.service';


@Component({
    selector: 'app-operating-tmu',
    templateUrl: './operating-tmu.component.html',
    styleUrls: ['./operating-tmu.component.scss']
})
export class OperatingTmuComponent implements OnInit {
    @Input() content: any;
    @ViewChild('chartOperatingTmu') chartOperatingTmu: ChartComponent;

    // 營運量-TMU&MTU第二層
    TMUDetail: any = {};
    tmuTransAmt: Array<any> = [];
    tmuInvesment: Array<any> = [];
    tmuContribution: Array<any> = [];

    // urlList = [
    //     {
    //         'url': this.URL.PRODUCT_TMU_DETAIL,
    //         'dtoRequset': CommonRequest,
    //         'dtoResponse': TMUDetail
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
        this.setTMUDetailData();
    }

    TmuData = {
        chart: {
            fontFamily: '微軟正黑體',
            height: 450,
            type: 'donut',
            width: 400,
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
        colors: ['#f77f00', '#fbc93e', '#999999'],

        dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            textAnchor: 'middle',
            style: {
                color: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
            },
            dropShadow: {
                enabled: false
            },
            offsetX: 20,
            offsetY: -10,
            formatter: function (val) {
                let pieVal = Math.round(val);
                return pieVal + ' %';
            },
        },
        tooltip: {
            followCursor: true,
            custom: function (obj) {
                const num = Math.round(obj.series[obj.seriesIndex] / 10000);
                const val = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 萬';
                return '<div class="px-2 py-1" >' +
                    obj.w.config.labels[obj.seriesIndex] + ' ' + val
                    + '</div>';
            },
            fillSeriesColor: true,
        },
        noData: {
            text: '無資料',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '16px',
                fontFamily: 'Microsoft JhengHei'
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '1rem',
                            offsetY: -25
                        },
                        value: {
                            show: true,
                            fontSize: '1.2rem',
                            offsetY: -10,
                            formatter: function (n) {
                                const valueNumber = Math.round(n / 10000);
                                return '$' + valueNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '萬';
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '0.8rem',
                            label: '合計',
                            color: '#000000',
                            formatter: function (w) {
                                const totalNumber = w.globals.seriesTotals.reduce((a: number, b: number) => {
                                    // return Math.floor((a + b)/10000);
                                    return a + b;
                                }, 0);
                                const totalN = Math.floor(totalNumber / 10000);
                                return '$' + totalN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 萬';
                            }
                        }

                    },

                }
            }
        },

        responsive: [
            {
                breakpoint: 1400,
                options: {
                    chart: {
                        width: 220,
                        height: 300
                    },
                    legend: {
                        position: 'top'
                    }
                }
            },
            {
                breakpoint: 900,
                options: {
                    chart: {
                        width: 400,
                        height: 400
                    },
                    legend: {
                        position: 'right'
                    }
                }
            }
        ],
        stroke: {
            curve: 'smooth'
        },
        series: [],
        labels: ['金融交易額度 (負債面)', '投資型商品 (資產面)', 'FX SPOT'],
        title: {
            text: 'TMU 貢獻度',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },

        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#000000',
            },
        }

    };
    setTMUDetailData() {
        this.tmuTransAmt = this.custchartsService._tmuTransAmt;
        this.tmuInvesment = this.custchartsService._tmuInvesment;
        this.TmuData.series = this.custchartsService._tmuContribution;
        

        // 日期轉換 20190330 return 2019/03/30
        this.tmuTransAmt.forEach((data, index) => {
            data.amountExpDate = this.utilsService.changeDateStr(data.amountExpDate, 'yyyy/MM/dd');
        });
        this.tmuInvesment.forEach((data, index) => {
            data.startDate = this.utilsService.changeDateStr(data.startDate, 'yyyy/MM/dd');
            data.endDate = this.utilsService.changeDateStr(data.endDate, 'yyyy/MM/dd')
        });
    }
}
