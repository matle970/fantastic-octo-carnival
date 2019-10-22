import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-water-print',
  templateUrl: './water-print.component.html',
  styleUrls: ['./water-print.component.scss']
})
export class WaterPrintComponent implements OnInit {
  @Input() msg: string;
  constructor() { }

  ngOnInit() {
    this.msg = this.msg ? this.msg: "123456";
  }

}
