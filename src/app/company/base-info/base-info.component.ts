import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;

  chartData = {
    chart: {
      height: 350,
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
  }

}
