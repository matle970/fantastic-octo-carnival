import { Component, ViewChild, OnInit, Input} from '@angular/core';

import { ModalService } from 'src/app/services/modal.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from './../../dialog/dialog.component';

import {
  ChartComponent,
  ApexChart,
  ApexAnnotations,
  ApexDataLabels,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexPlotOptions,
  ApexTooltip,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexStates,
  ApexTitleSubtitle,
  ApexTheme
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
      fontFamily: '微軟正黑體',
      foreColor: '#000000',
      toolbar: {
        show: false
      },
      height: 280,
      type: 'bar',
    },
    colors: ['#76BC21','#009F41'],
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#000']
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
        categories: ['現管', '放款', '貿融', '資顧', 'TMU', '其他'],
        labels: {
          style: {
            fontSize: '14px',
          }
        }
    },
    yaxis: {
      labels:{
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
    }
  };

  // 公司資料的假資料
  company_info = {
    date:'2019/06/18',
    company_name:'千里馬股份有限公司',
    data_list:[
      {
        id:'c01',
        name:'股票代號',
        content:'0730',
        infos:[],
        tags:[]
      },
      {
        id:'c02',
        name:'資本總額',
        content:'180000000',
        infos:[],
        tags:[]
      },
      {
        id:'c03',
        name:'實收資本額',
        content:'138629906',
        infos:[],
        tags:[]
      },
      {
        id:'c04',
        name:'核准設立日期',
        content:'1974/02/20',
        infos:[],
        tags:[]
      },
      {
        id:'c05',
        name:'代表人姓名',
        content:'李宛靜',
        infos:[],
        tags:[]
      },
      {
        id:'c06',
        name:'註冊地址',
        content:'新北市土城區中山路66號',
        infos:[],
        tags:[],
        activeMap:true
      },
      {
        id:'c07',
        name:'主要營業地址',
        content:'新北市土城區中山路66號',
        infos:[],
        tags:[],
        activeMap:false
      },
      {
        id:'c08',
        name:'聯絡地址',
        content:'新北市土城區中山路66號',
        infos:[],
        tags:[],
        activeMap:false
      },

      {
        id:'c09',
        name:'負責人',
        content:'林金霖',
        infos:[ " 6 月壽星","AUM 9,612"],
        tags:[1,2,3,4,5,6],
        travel:[
          {
            code:'ca',
            name: '加拿大'
          },
          {
            code:'th',
            name: '菲律賓'
          }

        ]
      },
      {
        id: 'c10',
        name: '負責人配偶',
        content: '王弈',
        infos:[ " 26 歲", "5 月壽星","AUM 1,485"],
        tags:[ 7, 8, 9, 10, 11],
        travel:[
          {
            code: 'kr',
            name: '首爾'
          },
          {
            code: 'no',
            name: '挪威'
          },
          {
            code: 'it',
            name: '義大利'
          },
          {
            code: 'jp',
            name: '日本'
          },
          {
            code: 'au',
            name: '澳洲'
          },
        ]
      },
      {
        id:'c11',
        name:'聯絡窗口 1',
        content:'財務長 徐以威',
        infos:["02 8722 6666 #7169"]
      },
      {
        id:'c12',
        name:'聯絡窗口 2',
        content:'經辦小姐 尤昕寧',
        infos:["02 8722 6666 #7155"]
      },
    ]
  }

  //集團資訊的假資料
  group_info = {
    date:'2019/08/06',
    company_name:'德魯納集團',
    data_list:[]
  }

  constructor(private modalService: ModalService, public dialog: MatDialog) { }

  ngOnInit() {
    const myChart = this.chartObj;
  }

  /**
   * 暫用此方法寫
   * @param modalId 開啟modal的方式
   */

  openDialog(modalId: number) {
    const openId = modalId ? modalId : 3;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    dialogConfig.data = {
      id: openId,
      title: '',
      content_data: {}
    };

    switch(openId){
      case 3 :
          dialogConfig.data.content_data = this.company_info;
          dialogConfig.data.title ='公司資訊';
          break;
      case 4 :
          dialogConfig.data.content_data = this.group_info;
          dialogConfig.data.title ='集團資訊';
          break;
      case 5 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title ='個人關聯戶';
          break;
      case 6 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title ='經管資訊';
          break;
      case 7 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title ='貢獻度';
          break;

      default:
        dialogConfig.data.content_data = this.company_info;
        dialogConfig.data.title ='公司資訊';
        break;


    }

    this.dialog.open(DialogComponent, dialogConfig);
  }

  /**
   * 之後有時間再詳寫此功能
   * @param mid
   */
  openModal (mid: string) {
    this.modalService.openModal(mid);

  }



}
