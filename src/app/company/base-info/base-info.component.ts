import { Component, ViewChild, OnInit, OnChanges, Input } from '@angular/core';

import { ModalService } from 'src/app/services/modal.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './../../dialog/dialog.component';
import { BaseComponent } from 'src/app/base/base-component';
import { plainToClass } from 'class-transformer';

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
import { CommonResponse } from 'src/app/dto/common-response';



@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent extends BaseComponent implements OnInit , OnChanges {

  @Input() searchStr: string;
  @ViewChild('chartObj') chartObj: ChartComponent;

  apiUrls: string[] = []; // 此componment需要發送的API urls

  lastcontriPeriod: string; // 貢獻度, 去年區間
  thiscontriPeriod: string; // 貢獻度, 今年區間
  contributionPeriod: string; // 貢獻度, 資料區間
  contributionLastYearTotal: number; // 貢獻度去年累計
  contributionThisYearTotal: number; // 貢獻度去年累計
  contributionObj: any; // 貢獻度的資料 for dialog
  contributionTitle = this.TITLE.contribution;

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


  // 圖表資訊
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
    colors: ['#76BC21', '#009F41'],
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
        name: '',
        data: [0, 0, 0, 0, 0, 0]
      },
      {
        name: '',
        data: [0, 0, 0, 0, 0, 0]
      }
    ],
    xaxis: {
      categories: this.contributionTitle,
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
    }
  };

  // 公司資料的假資料
  company_info = {
    date: '2019/06/18',
    company_name: '千里馬股份有限公司',
    data_list: [
      {
        id: 'c01',
        name: '股票代號',
        content: '0730',
        infos: [],
        tags: []
      },
      {
        id: 'c02',
        name: '資本總額',
        content: '180000000',
        infos: [],
        tags: []
      },
      {
        id: 'c03',
        name: '實收資本額',
        content: '138629906',
        infos: [],
        tags: []
      },
      {
        id: 'c04',
        name: '核准設立日期',
        content: '1974/02/20',
        infos: [],
        tags: []
      },
      {
        id: 'c05',
        name: '代表人姓名',
        content: '李宛靜',
        infos: [],
        tags: []
      },
      {
        id: 'c06',
        name: '註冊地址',
        content: '新北市土城區中山路66號',
        infos: [],
        tags: [],
        activeMap: true
      },
      {
        id: 'c07',
        name: '主要營業地址',
        content: '新北市土城區中山路66號',
        infos: [],
        tags: [],
        activeMap: false
      },
      {
        id: 'c08',
        name: '聯絡地址',
        content: '新北市土城區中山路66號',
        infos: [],
        tags: [],
        activeMap: false
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
        id: 'c11',
        name: '聯絡窗口 1',
        content: '財務長 徐以威',
        infos: ["02 8722 6666 #7169"]
      },
      {
        id: 'c12',
        name: '聯絡窗口 2',
        content: '經辦小姐 尤昕寧',
        infos: ["02 8722 6666 #7155"]
      },
    ]
  }

  //集團資訊的假資料
  group_info = {
    date: '2019/08/06',
    company_name: '德魯納集團',
    data_list: []
  }

  constructor(private modalService: ModalService, public dialog: MatDialog) { super(); }

  ngOnInit() {
    // const myChart = this.chartObj;
    this.getBaseInfoApiUrls();
    const request = this.prepareBaseInfoApiRequest(this.apiUrls, this.getShareDataService().getCustomerProfileParam()); // 取得所有需要發送的API urls
    // if (this.getShareDataService().getCacheData(this.URL.companyBaseInfo) === undefined) {
    if (!this.getShareDataService().checkIfGetCatcheDataByArry(this.apiUrls)) {
      console.log('Get 基本資訊By API');
      this.getBaseInfoData(request); // 取得資料ByAPI
    } else {
      console.log('Get 基本資訊By Cache');
      request.forEach((value: string) => {
        this.setBaseInfo(value['url'], this.getShareDataService().getCacheData(value['url']));
      });
    }
  }

  ngOnChanges() {
    if ( this.searchStr !== undefined && this.searchStr !== '') {
      console.log(this.searchStr);
      this.getShareDataService().customerId = this.searchStr;
        // tslint:disable-next-line: max-line-length
        this.getBaseInfoData(this.prepareBaseInfoApiRequest(this.apiUrls,this.getShareDataService().getCustomerProfileParam())); // 取得資料ByAPI
    }
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

    switch (openId) {
      case 3:
        dialogConfig.data.content_data = this.company_info;
        dialogConfig.data.title = '公司資訊';
        break;
      case 4:
        dialogConfig.data.content_data = this.group_info;
        dialogConfig.data.title = '集團資訊';
        break;
      case 5:
        dialogConfig.data.content_data = [];
        dialogConfig.data.title = '個人關聯戶';
        break;
      case 6:
        dialogConfig.data.content_data = [];
        dialogConfig.data.title = '經管資訊';
        break;
      case 7:
        console.log(dialogConfig);
        dialogConfig.data.content_data = this.contributionObj;
        dialogConfig.data.title = '貢獻度';
        // dialogConfig.data.url = this.URL.customerProfile.Layer1.getCBContribution;
        break;

      default:
        dialogConfig.data.content_data = this.company_info;
        dialogConfig.data.title = '公司資訊';
        break;


    }

    this.dialog.open(DialogComponent, dialogConfig);
  }

  /**
   * 之後有時間再詳寫此功能
   * @param mid
   */
  openModal(mid: string) {
    this.modalService.openModal(mid);

  }

  /*******************
   * 取得基本資訊所有的API Urls
   * @param param : api所需的參數值
   ********************/
  getBaseInfoApiUrls() {
    const urls = this.URL.customerProfile.Layer1;
    Object.keys(urls).forEach(value => {
      console.log(urls[value]);
      this.apiUrls.push(urls[value]);
    });
  }

  /*******************
   * 準備發送的API request Obj
   * {'url': string, 'param': param}
   * @param param : api所需的參數值
   ********************/
  prepareBaseInfoApiRequest(urls: string[], param: any) {

    const requestParam = [];
    urls.forEach(value => {
      requestParam.push({ 'url': value, 'param': param });
    });
    return requestParam;
  }

  /*******************
   * 發送API取得基本資料
   * *****************/
  getBaseInfoData(request: any) {
    request.forEach(value => {
      this.getRequestData(value.url, value.param).then((response: any) => {
        this.setBaseInfo(value.url, plainToClass(CommonResponse, response));
      }).catch((error: any) => {
        console.log('error' + error);
      });
    });
  }

  /*******************
   * 依各個 URL 塞各自的資料
   * *****************/
  setBaseInfo(url: string, response: any) {
    console.log(response);
    const status = response.header.returnCode;
    const data = response.body;
    if (status === '0000') {
      switch (url) {
        case this.URL.customerProfile.Layer1.getCBCompany:
          console.log('公司資訊');
          break;
        case this.URL.customerProfile.Layer1.getCBGroup:
          console.log('集團資訊');
          break;
        case this.URL.customerProfile.Layer1.getCBManage:
          console.log('經管資訊');
          break;
        case this.URL.customerProfile.Layer1.getCBContribution:
          console.log('貢獻度');
          this.setContributionData(data);
          break;
        default:
          console.log('url not found');
          break;
      }
    }
  }

  // 塞貢獻度資料
  setContributionData(data: any) {
    // 取得貢獻度資料, 每個值存成arry & 圖表標頭 & 更新圖表
    const lastYear: number[] = [];
    const thisYear: number[] = [];
    for (let i = 1; i < 7; i++) {
      lastYear.push(super.getUtilsService().removeCommafy(data.lastcontri['profittype' + i]));
      thisYear.push(super.getUtilsService().removeCommafy(data.thiscontri['profittype' + i]));
    }
    console.log(lastYear);
    console.log(thisYear);

    this.chartData.series[0]['data'] = lastYear;
    this.chartData.series[1]['data'] = thisYear;

    const lastYearStart = super.getUtilsService().changeDateStr(data.lastcontri.startym, 'yyyy/MM');
    const lastYearEnd = super.getUtilsService().changeDateStr(data.lastcontri.endym, 'yyyy/MM');
    const thisYearStart = super.getUtilsService().changeDateStr(data.thiscontri.startym, 'yyyy/MM');
    const thisYearEnd = super.getUtilsService().changeDateStr(data.thiscontri.endym, 'yyyy/MM');

    const lastYearPeriod = lastYearStart + '-' + lastYearEnd;
    const thisYearPeriod = thisYearStart + '-' + thisYearEnd;

    this.chartData.series[0]['name'] = lastYearPeriod;
    this.chartData.series[1]['name'] =  thisYearPeriod;

    this.chartObj.destroy();
    this.chartObj.render();

    // 去年度 &今年度 加總(取得總值後再加千分位 & $字符號)
    this.contributionLastYearTotal = super.getUtilsService().commafy(super.getUtilsService().getSumByArry(lastYear), true);
    this.contributionThisYearTotal = super.getUtilsService().commafy(super.getUtilsService().getSumByArry(thisYear), true);
    this.contributionPeriod = lastYearStart  + '-' + thisYearEnd; // 貢獻度資料區間

    this.contributionObj = {
      'lastYear' : {
        'text' : '去年度累計貢獻度',
        'period' : lastYearPeriod, // 去年度區間
        'data' : this.chartData.series[0]['data'], // 去年度資料
      },
      'thisYear' : {
        'text' : '今年度累計貢獻度',
        'period' : thisYearPeriod, // 今年度區間
        'data' : this.chartData.series[1]['data'], // 今年度資料
      },
      'contributionPeriod' : this.contributionPeriod, // 資料區間
    };
  }

}
