import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  contentData: any;

  dialogList =[
    {
      id:1,
      title:'關鍵提醒',
      data_date:'2019/09/06',
      content_data:{}
    },
    {
      id:2,
      title:'公司關鍵提醒',
      data_date:'2019/09/06',
      content_data:{}
    }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(){
    console.log(this);
    this.contentData = this.data;

  }
}
