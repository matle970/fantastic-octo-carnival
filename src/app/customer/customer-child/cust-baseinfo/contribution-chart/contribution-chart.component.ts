import { Component, ViewChild, Input, OnInit, OnChanges } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { CustBaseInfoComponent } from '../cust-baseinfo.component';
import { unsupported } from '@angular/compiler/src/render3/view/util';

@Component({
    selector: 'app-contribution-chart',
    templateUrl: './contribution-chart.component.html',
    styleUrls: ['./contribution-chart.component.scss']
})

export class ContributionChartComponent implements OnInit, OnChanges {

    @Input() ContributionChart: any = {};
    @ViewChild('ChartObj') ChartObj: ChartComponent;

    // 圖表資訊
    ChartData = {
        chart: {
            fontFamily: '微軟正黑體',
            foreColor: '#000000',
            toolbar: {
                show: false
            },
            height: 280,
            type: 'bar',
        },
        colors: ['#76BC21', '#009F41'],
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {   // 顯示在圖表上的數字，要隱藏，user不用。
            enabled: false,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#000000']
            }
        },
        responsive: [
            {
                breakpoint: 1400,
                options: {
                    chart: {
                        width: '85%',
                        height: 300
                    }
                }
            },
            {
                breakpoint: 900,
                options: {
                    chart: {
                        width: '90%',
                        height: 350
                    }
                }
            }
        ],
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        series: [
            {
                name: '2017/12-2018/07',
                data: [1000, 1200, 1500, 600, 300, 200]
            },
            {
                name: '2018/12-2019/07',
                data: [900, 1000, 1100, 700, 320, 350]
            }
        ],
        xaxis: {
            categories: [],
            labels: {
                style: {
                    fontSize: '14px',
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '16px',
                }
            }
        },
        legend: {
            position: 'top',
            labels: {
                colors: '#000000',
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            }
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

    ngOnChanges() {
        // console.log('this.ContributionChart', this.ContributionChart.data);

        if (this.ContributionChart.data !== undefined) {
            this.ngOnInit();
        }

    }

    ngOnInit() {
        if (this.ContributionChart.data !== undefined) {
            let categories = this.ContributionChart.data.contributionType;
            categories.forEach(item => {
                if (categories.length > 0) {
                    this.ChartData.xaxis.categories.push(item);
                }
            });
            // console.log('ChartData', this.ChartData);
        }
    }
}