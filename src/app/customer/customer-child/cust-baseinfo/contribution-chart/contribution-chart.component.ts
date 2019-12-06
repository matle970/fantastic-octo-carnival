import { Component, ViewChild, Input, OnInit, OnChanges } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

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
        series: [],
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

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.setcontributionType(this.ContributionChart.data);
        this.setlastcontri(this.ContributionChart.data);
        this.setthiscontri(this.ContributionChart.data);
    }

    ngOnInit() {

    }

    setcontributionType(data) {
        let categories: Array<string> = data.contributionType;
        for (let i = 0; i < categories.length; i++) {
            this.ChartData.xaxis.categories.push(categories[i]);
        }
    }

    setlastcontri(data) {
        let serieslastname: string = data.lastcontri.startYM + '-' + data.lastcontri.endYM;
        let serieslastdata: Array<string> = data.lastcontri.contribution;

        this.ChartData.series.push({ 'name': serieslastname, 'data': serieslastdata });
    }

    setthiscontri(data) {
        let seriesthisname: string = data.thiscontri.startYM + '-' + data.thiscontri.endYM;
        let seriesthisdata: Array<string> = data.thiscontri.contribution;

        this.ChartData.series.push({ 'name': seriesthisname, 'data': seriesthisdata });
    }
}