import { plainToClass } from "class-transformer";

export class DummyData {
    // URLs
    URL = require('src/app/objects/url/url.json');

    // CB012-Composite API-基本資訊-公司資訊第一層
    // CB013-Composite API-基本資訊-公司資訊第二層
    // CB028-Composite API-基本資訊-個人關聯戶第一層
    // CB014-Composite API-基本資訊-個人關聯戶第二層(關聯戶基本資訊)
    companyassociate = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "records": [
                {
                    "customerId": "A11111112",
                    "customerName": "XXX",
                    "relationDesc": "負責人",
                    "vipTypeCode": "HVIP",
                    "wmAoName": "Camile",
                    "wmAoBranchDesc": "忠孝分行"
                }
            ]
        }
    }

    // CB015-Composite API-基本資訊-個人關聯戶第二層(客戶資產負債)
    // CB016-Composite API-基本資訊-集團資訊第一層
    // CB017-Composite API-基本資訊-集團資訊第二層
    // CB018-Composite API-基本資訊-經管資訊第一層
    // CB019-Composite API-基本資訊-經管資訊第二層
    // CB020-Composite API-基本資訊-貢獻度第一層
    contribution = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerid": "A1111111111",
            "lastcontri": {
                "startym": "201712",
                "endym": "201805",
                "profittype1": "10000",
                "profittype2": "20000",
                "profittype3": "30000",
                "profittype4": "40000",
                "profittype5": "50000",
                "profittype6": "60000",
            },
            "thiscontri": {
                "startym": "201812",
                "endym": "201905",
                "profittype1": 6000,
                "profittype2": 5000,
                "profittype3": 4000,
                "profittype4": 3000,
                "profittype5": 2000,
                "profittype6": 1000,
            }
        }
    }

    // CB021-Composite API-基本資訊-貢獻度第二層
    // CB022-Composite API-基本資訊-訊息通知


    getDummyData<T>(url: string, classType: any): Promise<{}> {
        let returnData: any;

        switch (url) {
            // CB007-Composite API-基本資訊-營運量第一層
            case this.URL.PRODUCT_ASSETS_LIBILITIES:
                break;
                
            // CB012-Composite API-基本資訊-公司資訊第一層
            // CB013-Composite API-基本資訊-公司資訊第二層
            // CB028-Composite API-基本資訊-個人關聯戶第一層
            // CB014-Composite API-基本資訊-個人關聯戶第二層(關聯戶基本資訊)
            case this.URL.CUSTPROFILE_COMPANYASSOCIATE:
                returnData = this.companyassociate;
                break;
                
            // CB015-Composite API-基本資訊-個人關聯戶第二層(客戶資產負債)
            // CB016-Composite API-基本資訊-集團資訊第一層
            // CB017-Composite API-基本資訊-集團資訊第二層
            // CB018-Composite API-基本資訊-經管資訊第一層
            // CB019-Composite API-基本資訊-經管資訊第二層
            // CB020-Composite API-基本資訊-貢獻度第一層
            case this.URL.CUSTPROFILE_CONTRIBUTION:
                returnData = this.contribution;
                break;

            // CB021-Composite API-基本資訊-貢獻度第二層
            // CB022-Composite API-基本資訊-訊息通知
        }

        return new Promise((resolve, reject) => {
            resolve(plainToClass(classType, returnData));
            reject();
        });
    }
}
