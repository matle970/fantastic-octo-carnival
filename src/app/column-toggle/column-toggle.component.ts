import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-toggle',
  templateUrl: './column-toggle.component.html',
  styleUrls: ['./column-toggle.component.scss']
})
export class ColumnToggleComponent implements OnInit {
  @Input('app-column-toggle') theColumn; 
  
  constructor() {}
  ngOnInit() {
  }
}
