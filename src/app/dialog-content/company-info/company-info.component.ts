import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  @Input() content: any;
  constructor() { }

  ngOnInit() {
  }

  getFlagClass(countryCode: string) {
    return 'flag-icon-' + countryCode;
  }

}
