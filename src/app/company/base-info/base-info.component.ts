import { Component, ViewChild, OnInit, Input} from '@angular/core';
import {
  ChartComponent,
  ApexChart,
  ApexAnnotations,
  ApexDataLabels,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexStroke, ApexLegend, ApexFill, ApexPlotOptions, ApexTooltip, ApexResponsive, ApexXAxis, ApexYAxis, ApexGrid, ApexStates, ApexTitleSubtitle, ApexTheme
} from 'ng-apexcharts';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {

  @ViewChild('chartObj') chartObj: ChartComponent;

  // @Input() chart: ApexChart;
  // @Input() annotations: ApexAnnotations;
  // @Input() colors: string[];
  // @Input() dataLabels: ApexDataLabels;
  // @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  // @Input() stroke: ApexStroke;
  // @Input() labels: string[];
  // @Input() legend: ApexLegend;
  // @Input() fill: ApexFill;
  // @Input() tooltip: ApexTooltip;
  // @Input() plotOptions: ApexPlotOptions;
  // @Input() responsive: ApexResponsive[];
  // @Input() xaxis: ApexXAxis;
  // @Input() yaxis: ApexYAxis | ApexYAxis[];
  // @Input() grid: ApexGrid;
  // @Input() states: ApexStates;
  // @Input() title: ApexTitleSubtitle;
  // @Input() subtitle: ApexTitleSubtitle;
  // @Input() theme: ApexTheme;



  chartData = {
    chart: {
      height: 280,
      type: 'bar',
    },
    colors: ['#81c784','#388e3c'],
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [
        {
          name: '2017/12-2018/05',
          data: [100, 120, 150, 60, 30, 20]
        },
        {
          name: '2018/12-2019/05',
          data: [90, 100, 110, 70, 32, 35]
        }
      ],
    xaxis: {
        categories: ['現管', '放款', '貿融', '資顧', 'TMU', '其他'],
        labels:{
          style: {
            fontSize: '16px',
          }
        }


    },
    legend: {
      position: 'top',
    }
  };

  constructor() { }

  ngOnInit() {
    const myChart = this.chartObj;
  }

}
