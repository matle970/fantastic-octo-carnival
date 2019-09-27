import { Component, ViewChild, OnInit} from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-comp-charts',
  templateUrl: './comp-charts.component.html',
  styleUrls: ['./comp-charts.component.scss']
})
export class CompChartsComponent implements OnInit {

  @ViewChild('chartDeposit') chartDeposit: ChartComponent;
  @ViewChild('chartLoad') chartLoad: ChartComponent;

  
  constructor() { }

  ngOnInit() {
  }

}
