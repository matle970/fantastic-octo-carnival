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
        data: [100, 99, 98, 95, 70, 60, 65, 50, 55, 60, 45, 35, 40]
      }
    ],
    dataLabels: {
      enabled: true
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

  LoanData = {
    chart: {
      height: 350,
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
    colors: ['#0077c8', '#48a9c5'],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: 'High - 2013',
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: 'Low - 2013',
        data: [12, 11, 14, 18, 17, 13, 13]
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature'
      },
      min: 5,
      max: 40
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  constructor() {}

  ngOnInit() {}
}
