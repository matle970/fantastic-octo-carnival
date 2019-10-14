import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {
  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
