import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('keyword') keyword: string;

  @Input() datalist: string;

  myKeyword: string = '';

  constructor() { }

  ngOnInit() {
  }

}
