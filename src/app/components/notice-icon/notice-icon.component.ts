import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice-icon',
  templateUrl: './notice-icon.component.html',
  styleUrls: ['./notice-icon.component.scss']
})
export class NoticeIconComponent implements OnInit {


  @Input() notice: number;

  ngOnInit(): void {
  }
  constructor() { }

}


