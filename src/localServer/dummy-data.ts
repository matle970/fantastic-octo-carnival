import { plainToClass } from "class-transformer";

export class DummyData {
    // URLs
    URL = require('src/app/objects/url/url.json');

    //CB001-Composite API
    serviceToken = {
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
            "customerid": "jeweltest01",
            "token": "jeweltestToken001"
        }
    };

    //CB-005-Composite API
    companyList = {
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
            "aoData": [
                {
                    "id": "d000",
                    "ao": "人類經理 具燦星",
                    "group_name": "滿月集團",
                    "cus_id": "03546618",
                    "cus_name": "jeweltestDummyData",
                    "msr": "4",
                    "rorwa": "0.36%",
                    "raroc": "0.36%",
                    "last_year_contribution": "10000",
                    "this_year_contribution": "9000",
                    "deposit": "1000000",
                    "load_balance": "600000",
                    "trade_balance": "3000",
                    "tag": [1, 2, 3]
                },{
                "id": "d001",
                "ao": "人類經理 具燦星",
                "group_name": "滿月集團",
                "cus_id": "03546618",
                "cus_name": "德魯納股份有限公司",
                "msr": "4",
                "rorwa": "0.36%",
                "raroc": "0.36%",
                "last_year_contribution": "10000",
                "this_year_contribution": "9000",
                "deposit": "1000000",
                "load_balance": "600000",
                "trade_balance": "3000",
                "tag": [1, 2, 3]
            },
            {
                "id": "d002",
                "ao": "店長 鄭北東",
                "group_name": "滿月集團",
                "cus_id": "11223355",
                "cus_name": "千里馬超市",
                "msr": "4",
                "rorwa": "0.56%",
                "raroc": "0.36%",
                "last_year_contribution": "100",
                "this_year_contribution": "500",
                "deposit": "100000",
                "load_balance": "60000",
                "trade_balance": "3000",
                "tag": [2, 3]
            },
            {
                "id": "d003",
                "ao": "酒保 金時翼",
                "group_name": "滿月集團",
                "cus_id": "11223355",
                "cus_name": "天空酒吧",
                "msr": "4",
                "rorwa": "0.56%",
                "raroc": "0.36%",
                "last_year_contribution": "50000",
                "this_year_contribution": "500",
                "deposit": "100",
                "load_balance": "60000",
                "trade_balance": "3000",
                "tag": [2, 3]
            },
            {
                "id": "c001",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "03546618",
                "cus_name": "廣宇科技股份有限公司",
                "msr": "4",
                "rorwa": "0.36%",
                "raroc": "0.36%",
                "last_year_contribution": "1000",
                "this_year_contribution": "900",
                "deposit": "10000",
                "load_balance": "2000",
                "trade_balance": "3000",
                "tag": [1, 2, 3]
            },
            {
                "id": "c002",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "12800225",
                "cus_name": "群創光電股份有限公司",
                "msr": "D",
                "rorwa": "",
                "raroc": "",
                "last_year_contribution": "1000",
                "this_year_contribution": "900",
                "deposit": "",
                "load_balance": "2000",
                "trade_balance": "3000",
                "tag": [1]
            },
            {
                "id": "c003",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "80731387",
                "cus_name": "宏瀚投資股份有限公司",
                "msr": "4",
                "rorwa": "0.85%",
                "raroc": "0.85%",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": [1, 2]
            },
            {
                "id": "c004",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "80732007",
                "cus_name": "聯巨投資股份有限公司",
                "msr": "6+",
                "rorwa": "0.74%",
                "raroc": "0.74%",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": [3]
            },
            {
                "id": "c005",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "84149499",
                "cus_name": "天鈺科技股份有限公司",
                "msr": "5",
                "rorwa": "6.22%",
                "raroc": "6.22%",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": [4]
            },
            {
                "id": "c006",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "496390JA",
                "cus_name": "捷達創新科技有限公司",
                "msr": "W2",
                "rorwa": "",
                "raroc": "",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": [5]
            },
            {
                "id": "c007",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "27310561",
                "cus_name": "啟耀光電股份有限公司",
                "msr": "8",
                "rorwa": "",
                "raroc": "",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": []
            },
            {
                "id": "c008",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "28488592",
                "cus_name": "瑞祺電通股份有限公司",
                "msr": "5",
                "rorwa": "",
                "raroc": "",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": []
            },
            {
                "id": "c009",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "70380046",
                "cus_name": "樺漢科技股份有限公司",
                "msr": "4+",
                "rorwa": "0.43%",
                "raroc": "0.43%",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": []
            },
            {
                "id": "c010",
                "ao": "企企2 葉又萱",
                "group_name": "鴻海集團",
                "cus_id": "24291669",
                "cus_name": "康聯生醫科技股份有限公司",
                "msr": "6",
                "rorwa": "1.98%",
                "raroc": "1.98%",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": []
            },
            {
                "id": "c011",
                "ao": "企企2 jeweltest01",
                "group_name": "鴻海集團",
                "cus_id": "24291669",
                "cus_name": "康聯生醫科技股份有限公司",
                "msr": "6",
                "rorwa": "1.98%",
                "raroc": "1.98%",
                "last_year_contribution": "",
                "this_year_contribution": "",
                "deposit": "",
                "load_balance": "",
                "trade_balance": "",
                "tag": []
            }
            ]
        }
    };


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
            // 首頁總覽-經管名單列表 <<假的>>
            case this.URL.FIRSTPAGE_AO_PROFILE:
                returnData = this.serviceToken;
                break;

            // 首頁總覽-經管名單列表 <<假的>>
            case this.URL.FIRSTPAGE_COMPANY_LIST:
                returnData = this.companyList;
                break;


            // 基本資訊-貢獻度第一層
            case this.URL.CUSTPROFILE_CONTRIBUTION:
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
