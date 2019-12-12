import { Component, OnInit, Input } from '@angular/core';
import { AoIdentityService } from 'src/app/services/common-services/ao-identity.service';

@Component({
  selector: 'app-water-print',
  templateUrl: './water-print.component.html',
  styleUrls: ['./water-print.component.scss']
})
export class WaterPrintComponent implements OnInit {
  @Input() msg: string;
  @Input() MdSize: boolean;
  constructor(private aoIdentityService: AoIdentityService) { }

  ngOnInit() {
    this.msg = this.msg ? this.msg : this.aoIdentityService.aoId;
    this.MdSize = (this.MdSize === true) ? true : false;
  }

}
