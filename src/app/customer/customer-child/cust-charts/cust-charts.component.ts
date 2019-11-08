import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import { ModalService } from 'src/app/objects/services/modal.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';

@Component({
  selector: 'app-cust-charts',
  templateUrl: './cust-charts.component.html',
  styleUrls: ['./cust-charts.component.scss']
})
export class CustChartsComponent implements OnInit {
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
      show:true,
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
    },
    tooltip: {
      y: {
        formatter: function (val) {
          const pnum = val*100;
          return (pnum + '%');
        },
      }
    }


  };

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


  constructor(private modalService: ModalService, public dialog: MatDialog) { }

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

  openDialog(modalId: number, wide?: boolean) {
    const openId = modalId ;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    // dialogConfig.width = '80%';
    dialogConfig.data = {
      id: openId,
      title: '',
      content_data: {}
    };

    if(wide){
      dialogConfig.panelClass = 'open-table-wide';
    } else {
      dialogConfig.panelClass = 'open-table-narrow';
    }

    switch (openId) {
      case 8 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title = '存款餘額';
          break;
      case 9 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title = '放款餘額 / 貿融餘額';
          break;
      case 10 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title = '進口 / 出口';
          break;
      case 11 :
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
}
