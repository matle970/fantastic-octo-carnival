import { Component, OnInit, ViewChild} from '@angular/core';
import { viewAttached } from '@angular/core/src/render3/instructions';
import $ from jQuery;

@Component({
  selector: 'app-notice-modal',
  templateUrl: './notice-modal.component.html',
  styleUrls: ['./notice-modal.component.scss']
})
export class NoticeModalComponent implements OnInit {

  @ViewChild('notice') notice: any;
  NoticeOpen = false;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.NoticeOpen = false;
  }

}
