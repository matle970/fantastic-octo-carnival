import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PersonRelativeService } from 'src/app/services/customer/cust-baseinfo/person-relative.service';
// import { IdentityService } from 'src/app/services/identity.service';
export interface person {
    name: string;
    pid: string;
}

export interface debt {
    type: string;
    account: string;
    currency: string;
    amount: string;
    total: string;
    note: string;
}

@Component({
    selector: 'app-person-relative',
    templateUrl: './person-relative.component.html',
    styleUrls: ['./person-relative.component.scss']
})
export class PersonRelativeComponent implements OnInit, OnChanges {

    @Input() content: any;

    // html text
    text = this.personrelativeService.baseservice.gettextservice.custbaseinfotext;
    separation_text: string = this.text.separation_text;
    wmAo_text: string = this.text.wmAo_text;

    selected: string;
    pList: Array<any> = [];
    relationDesc: string;
    vipTypeCode: string;
    wmAoBranchDesc: string;
    wmAoName: string;

    constructor(
        private personrelativeService: PersonRelativeService
    ) { }

    ngOnChanges() {
        // console.log('content', this.content);

        this.setCompanyAssociate();
        this.setCompanyAssociateAssets();
    }

    ngOnInit() {
    }

    selectPerson(index: any) {
        this.selected = this.content.data.records[index].customerName + ' ' + this.content.data.records[index].customerId;
        this.relationDesc = this.content.data.records[index].relationDesc;
        this.vipTypeCode = this.content.data.records[index].vipTypeCode;
        this.wmAoBranchDesc = this.content.data.records[index].wmAoBranchDesc;
        this.wmAoName = this.content.data.records[index].wmAoName;
    }

    setCompanyAssociate() {
        this.selected = this.content.data.records[0].customerName + ' ' + this.content.data.records[0].customerId;
        for (let i = 0; i < this.content.data.records.length; i++) {
            this.pList.push(this.content.data.records[i].customerName + ' ' + this.content.data.records[i].customerId);
        }
        this.relationDesc = this.content.data.records[0].relationDesc;
        this.vipTypeCode = this.content.data.records[0].vipTypeCode;
        this.wmAoBranchDesc = this.content.data.records[0].wmAoBranchDesc;
        this.wmAoName = this.content.data.records[0].wmAoName;
    }

    async setCompanyAssociateAssets() {
        await this.personrelativeService.sendRquest();
    }






    identity = ['AML', '黑名單', '低度行銷'];




    personList: person[] = [
        {
            name: '林金霖',
            pid: 'A123456789'
        },
        {
            name: '李知恩',
            pid: 'A2111222333'
        },
        {
            name: '呂珍九',
            pid: 'A1111222333'
        },
        {
            name: '張藝琳',
            pid: 'A2456789132'
        },
    ];

    identityWord = '';
    public identityStatus: boolean = false; // 是否祕密戶
    public identityShow: boolean = false;   // 是否 show 身份字樣

    // constructor( private _identityService: IdentityService ) {
    //   this._identityService.IdentityStatus$.subscribe( res => {
    //     this.identityStatus = res;
    //     if (this.identityStatus) {
    //       this.identityWord = '[祕密戶] 僅揭露部分資訊';
    //     } else {
    //       this.identityWord = '[本行同仁] 僅揭露部分資訊';
    //     }
    //   });
    //   this._identityService.IdentityShow$.subscribe( res => {
    //     this.identityShow = res;
    //   });
    // }

}
