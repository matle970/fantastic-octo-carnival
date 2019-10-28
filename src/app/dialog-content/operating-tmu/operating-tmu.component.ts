import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';


@Component({
  selector: 'app-operating-tmu',
  templateUrl: './operating-tmu.component.html',
  styleUrls: ['./operating-tmu.component.scss']
})
export class OperatingTmuComponent implements OnInit {
  @ViewChild('chartTmu') chartTmu: ChartComponent;
  TmuData = {
    chart: {
      fontFamily: '微軟正黑體',
      height: 450,
      type: 'donut',
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
    colors: ['#f77f00', '#fbc93e','#ff5722'],

    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '1.2rem',
              offsetY: -25
            },
            value: {
              show: true,
              fontSize: '1.2rem',
              offsetY: -10,
              formatter: function (n) {
                return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              }
            },
            total: {
              show: false,
              fontSize: '1rem',
              label: '合計',
              color: '#000000',
              formatter: function (w) {
                const totalNumber = w.globals.seriesTotals.reduce((a: number, b: number) => {
                  // return Math.floor((a + b)/10000);
                  return a + b;
                }, 0);
                const totalN =  Math.floor(totalNumber/10000);
                return '$'+totalN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 萬';
              }
            }

          },

        }
      }
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            width: 300,
            height: 300
          },
        }
      },
      {
        breakpoint: 900,
        options: {
          chart: {
            width: 450,
            height: 450
          },

        }
      }
    ],
    stroke: {
      curve: 'smooth'
    },
    series: [44,55,40],
    labels:['金融交易額度 (負債面)','投資型商品 (資產面)','FX SPOT'],
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

  constructor() { }

  ngOnInit() {
  }

}
