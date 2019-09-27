import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-comp-charts',
  templateUrl: './comp-charts.component.html',
  styleUrls: ['./comp-charts.component.scss']
})
export class CompChartsComponent implements OnInit {
  @ViewChild('chartDeposit') chartDeposit: ChartComponent;
  @ViewChild('chartLoad') chartLoad: ChartComponent;

  DepositData = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: ['#f47721'],
    series: [
      {
        name: '存款',
        data: [100, 99, 98, 95, 70, 60, 65, 50, 55, 60,45,35,40]
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
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        'Aug,18',
        'Sep,18',
        'Oct,18',
        'Dec,18',
        'Jan,19',
        'Feb,19',
        'Mar,19',
        'Apr,19',
        'May,19',
        'Jun,19',
        'Jul,19',
        'Aug,19',
        '6 Aug,19'
      ]
    }
  };

  constructor() {}

  ngOnInit() {}
}
