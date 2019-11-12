import { plainToClass } from "class-transformer";

export class DummyData {
    // URLs
    URL = require('src/app/objects/url/url.json');

    // 假資料 CB020-Composite API-基本資訊-貢獻度第一層
    contribution1 = {
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

    // 假資料 首頁關鍵提醒
    notice_one = {
        mid: 1,
        date: '2019/06/18',
        type_list: [
            {
                id: 'all',
                name: '全部',
                total: 7,
            },
            {
                id: 'alert',
                name: '警示通知',
                total: '2',
            },
            {
                id: 'trade',
                name: '交易提醒aaa',
                total: '2',
            },
            {
                id: 'news',
                name: '企業訊息與公告',
                total: '3',
            },

        ],
        data_list: [
            {
                id: 'n001',
                type: 'alert',
                type_name: '警示通知',
                time: '2019/06/18',
                company: '廣宇科技股份有限公司',
                new_title: '企企股份有限公司自花旗銀行匯入美金 $80,569'
            },
            {
                id: 'n002',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/04/18',
                company: '群創光電股份有限公司',
                new_title: '2019/05/18 Call Loan 新臺幣 $1,000,000 到期'
            },
            {
                id: 'n003',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/03/18',
                company: '宏瀚投資股份有限公司',
                new_title: ' 2019/04/18 定存美金 $30,000,000 到期'
            },

            {
                id: 'n004',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '聯巨投資股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n005',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '聯巨投資股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n006',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '聯巨投資股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },


        ]
    }

    // 假資料 公司的關鍵提醒
    notice_two = {
        mid: 2,
        date: '2019/06/18',
        type_list: [
            {
                id: 'all',
                name: '全部',
                total: 7,
            },
            {
                id: 'alert',
                name: '警示通知',
                total: '2',
            },
            {
                id: 'trade',
                name: '交易提醒',
                total: '2',
            },
            {
                id: 'news',
                name: '企業訊息與公告',
                total: '3',
            },

        ],
        data_list: [
            {
                id: 'n001',
                type: 'alert',
                type_name: '警示通知',
                time: '2019/06/18',
                company: '千里馬股份有限公司',
                new_title: '千里馬股份有限公司自花旗銀行匯入美金 $80,569'
            },
            {
                id: 'n002',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/04/18',
                company: '千里馬股份有限公司',
                new_title: '2019/05/18 Call Loan 新臺幣 $1,000,000 到期'
            },
            {
                id: 'n003',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/03/18',
                company: '千里馬股份有限公司',
                new_title: ' 2019/04/18 定存美金 $30,000,000 到期'
            },

            {
                id: 'n004',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '千里馬股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n005',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '千里馬股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n006',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '千里馬股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },


        ]
    }

    getDummyData<T>(url: string, classType: any): Promise<{}> {
        let returnData: any;
        
        switch (url) {
            // 基本資訊-貢獻度第一層
            case this.URL.CUSTOMER_PROFILE_CONTRIBUTION:
                returnData = this.contribution1;
                break;

            // 基本資訊-營運量第一層
            case this.URL.PRODUCT_ASSETS_LIBILITIES:
                break;
        }

        return new Promise((resolve, reject) => {
            resolve(plainToClass(classType, returnData));
            reject();
        });
    }
}
