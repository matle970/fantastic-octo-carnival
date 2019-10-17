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
  @ViewChild('chartTrade') chartTrade: ChartComponent;
  @ViewChild('chartTmu') chartTmu: ChartComponent;

  DepositData = {
    chart: {
      fontFamily: '微軟正黑體',
      toolbar: {
        show: false
      },
      height: 200,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    colors: ['#CC3B0A'],
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
      categories: [
        '8',
        '9',
        '10',
        '11',
        '12',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '8',
        'today'
      ]
    },
    yaxis: {
      labels:{
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
    }
  };

  LoanData = {
    chart: {
      fontFamily: '微軟正黑體',
      height: 200,
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
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: '放款',
        data: [1000, 800, 1200, 1600, 1500, 1300, 1200,800,700,1100,1300,1123,1400]
      },
      {
        name: '貿融',
        data: [500, 700, 500, 600, 400, 300, 200,100,200,300,300,423,600]
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
        '8',
        '9',
        '10',
        '11',
        '12',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '8',
        'today'
      ],
      labels:{

      }
    },
    yaxis: {
      labels:{
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
    }
  };


  TmuData = {
    chart: {
      fontFamily: '微軟正黑體',
      height: 200,
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
    colors: ['#FFA51F', '#FFE180'],

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: 'TMU',
        data: [0.1, 0.5, 0.3, 0.5, 0.6, 0.7, 0.8, 0.9, 0.4, 0.3, 0.2, 0.5,0.1]
      },
      {
        name: 'MTM',
        data: [0.2, 0.3, 0.5, 0.4, 0.5, 0.6, 0.7,0.3,0.5,0.3,0.2,0.6,0.7]
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
        '8',
        '9',
        '10',
        '11',
        '12',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '8',
        'today'
      ],
      labels:{

      }
    },
    yaxis: {
      labels:{
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
    }

  };

  TradeData = {
    chart: {
      fontFamily: '微軟正黑體',
      height: 200,
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
    colors: ['#996D31', '#CCAB7E'],
    dataLabels: {
      enabled: false,
      formatter: function(val) {
        return val ? val.toFixed(1) + '%' : ''
      }

    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: '進口',
        data: [1000, 800, 1200, 1600, 1500, 1300, 1200,800,700,1100,1300,1123,1400]
      },
      {
        name: '出口',
        data: [500, 700, 500, 600, 400, 300, 200,100,200,300,300,423,600]
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
        '8',
        '9',
        '10',
        '11',
        '12',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '8',
        'today'
      ],
      labels:{

      }
    },
    yaxis: {
      labels:{
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
    }
  };


  constructor() {}

  ngOnInit() {
    // console.log(this);
    // this.allChartEnd();

    // const nthis = this;
    // setTimeout(function(){
    //   nthis.reRenderCharts();
    // },2000);
  }

  allChartEnd() {
    this.chartDeposit.destroy();
    this.chartLoad.destroy();
    this.chartTrade.destroy();
    this.chartTmu.destroy();
  };
  reRenderCharts() {
    this.chartDeposit.render();
    this.chartLoad.render();
    this.chartTrade.render();
    this.chartTmu.render();
  }
}
