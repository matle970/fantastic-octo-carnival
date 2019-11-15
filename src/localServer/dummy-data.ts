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
            "aoId": "jeweltest01",
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
                }, {
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

    /*
    // CB007-Composite API-營運量-第一層
    // CB008-Composite API-營運量-存款餘額第二層
    // CB009-Composite API-營運量-放款餘額第二層
    // CB010-Composite API-營運量-進出口實績第二層
    // CB011-Composite API-營運量-TMU額度第二層
    */
    assetsLibilites = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": [{
            "customerId": "A111111112",
            "deposit": "存款餘額",
            "depositMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "depositBal": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "loan": "放款餘額",
            "loanMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "loanBal": ["5555", "4444", "3333", "2222", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"],
            "tradeFinance": "貿融餘額",
            "tradeFinanceMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "tradeFinanceBal": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "import": "進口實績",
            "importMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "importAmt": ["5555", "4444", "3333", "2222", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"],
            "export": "出口實績",
            "exportMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "exportAmt": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "tmu": "TMU額度使用率",
            "tmuMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "tmuUsage": ["0.0667", "0.0887", "0.0777", "0.0557", "0.0447", "0.0337", "0.0227", "0.0317", "0.0997", "0.0887", "0.0227", "0.0337", "0.0447"],
            "mtm": "MTM額度使用率",
            "mtmMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "mtmUsage": ["0.0447", "0.0337", "0.0227", "0.0887", "0.0997", "0.0227", "0.0117", "0.0227", "0.0337", "0.0447", "0.0557", "0.0777", "0.0887"],
        }]
    }

    // CB012-Composite API-基本資訊-公司資訊第一層
    company = {
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
            "customerId": "A11111112",
            "approvalGrade": "5+",
            "rorwa": "1.34",
            "raroc": "1.58",
            "totalRelAssetBal": "222.33",
            "totalRelCreditLimit": "151542",
            "totalRelLiabilitiesBal": "8978789.88",
            "tcriLevel": "5"
        }
    }

    // CB013-Composite API-基本資訊-公司資訊第二層
    // CB028-Composite API-基本資訊-個人關聯戶第一層
    // CB014-Composite API-基本資訊-個人關聯戶第二層(關聯戶基本資訊)
    companyAssociate = {
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
    companyAssociateAssets = {
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
            "customerid": "A222222222",
            "assets": {
                "sdDetail": [
                    {
                        "accNbr": "0000705381000111",
                        "ntdY1AvgBal": "80000",
                        "ntdCurrentBal": "1400000",
                        "isSecurities": "Y"
                    }
                ],
                "tdDetail": [
                    {
                        "accNbr": "0000705381000111",
                        "ntdY1AvgBal": "6000000",
                        "ntdCurrentBal": "6000000"
                    }
                ],
                "cdDetail": [
                    {
                        "accNbr": "00154716453333",
                        "ntdY1AvgBal": "1600000",
                        "ntdCurrentBal": "14500000",
                        "dishY3ChkCnt": "5",
                        "dishCancelY3ChkCnt": "1",
                        "lastRejectDate": "20190921",
                        "rejectedStatusInd": "Y"
                    }
                ]
            },
            "libilities": [
                {
                    "productId": "房貸",
                    "productCodeDesc": "一般房貸_擔保",
                    "acctNbr": "0000705381000111",
                    "currencyCodeDesc": "新臺幣",
                    "ntdApprovalAmt": "70000",
                    "ntdCurrentBal": "69997",
                    "delqDays": "Y",
                    "collateralCode": "testOO",
                    "buildPurposeCode": "住宅"
                }
            ],
            "ccCard": [
                {
                    "cardName": "亞洲萬里通聯名卡",
                    "kindName": "世界卡",
                    "primaryCardInd": "正卡",
                    "cardholderCustName": "林金霖"
                }
            ],
            "investment": {
                "lifeInsurance": "Y",
                "productInsurance": "Y",
                "fund": "N",
                "foreignsecurities": "N",
                "structuredInvestment": "Y"
            }
        }
    }

    // CB016-Composite API-基本資訊-集團資訊第一層
    // CB017-Composite API-基本資訊-集團資訊第二層
    // CB018-Composite API-基本資訊-經管資訊第一層
    // CB019-Composite API-基本資訊-經管資訊第二層
    /*
    // CB020-Composite API-基本資訊-貢獻度第一層
    // CB021-Composite API-基本資訊-貢獻度第二層
    */
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

<<<<<<< HEAD
    // CB007-Composite API-營運量-第一層
    assetslibilites = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": [{
            "customerId": "A111111112",
            "deposit": "存款餘額",
            "depositMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "depositBal": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "loan": "放款餘額",
            "loanMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "loanBal": ["5555", "4444", "3333", "2222", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"],
            "tradeFinance": "貿融餘額",
            "tradeFinanceMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "tradeFinanceBal": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "import": "進口實績",
            "importMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "importAmt": ["5555", "4444", "3333", "2222", "1111", "2222", "3333", "4444", "5555", "6666", "7777", "8888", "9999"],
            "export": "出口實績",
            "exportMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "exportAmt": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "tmu": "TMU額度使用率",
            "tmuMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "tmuUsage": ["0.0667", "0.0887", "0.0777", "0.0557", "0.0447", "0.0337", "0.0227", "0.0317", "0.0997", "0.0887", "0.0227", "0.0337", "0.0447"],
            "mtm": "MTM額度使用率",
            "mtmMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "mtmUsage": ["0.0447", "0.0337", "0.0227", "0.0887", "0.0997", "0.0227", "0.0117", "0.0227", "0.0337", "0.0447", "0.0557", "0.0777", "0.0887"],
        }]
    }
    // CB008-Composite API-營運量-存款餘額第二層
    depositDetail = {
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
            "customerId": "A111111112",
            "assets": {
                "ntdAssets": {
                    "sd": "1111",
                    "td": "2222",
                    "cd": "3333"
                },
                "fxAssets": {
                    "sd": "1111",
                    "td": "2222",
                    "cd": "3333"
                },
                "sumAssets": {
                    "sd": "2222",
                    "td": "4444",
                    "cd": "6666"
                },
                "r6mthAvgBal": {
                    "sd": "2000",
                    "td": "2000",
                    "cd": "2000"
                }
            },
            "sdDetail": [{
                "acctNbr": "",
                "currencyCode": "",
                "fxCurrentBal": "",
                "ntdCurrentBal": "",
                "currentIntRate": "",
                "ftpRate": "",
                "sdRemark": {
                    "accBranchCode": "",
                    "payrollCodeDtl": "",
                    "isTrust": "",
                    "isSecurities": "",
                    "isRevers": ""
                }
            }],
            "tdDetail": [{
                "acctNbr": "",
                "currencyCode": "",
                "fxCurrentBal": "",
                "ntdCurrentBal": "",
                "currentIntRate": "",
                "ftpRate": "",
                "acctOpenDate": "",
                "tdDueDate": ""
            }],
            "cdDetail": [{
                "acctNbr": "",
                "ntdCurrentBal": "",
                "cdRemark": {
                    "dishY3ChkCnt": "",
                    "dishCancelY3ChkCnt": "",
                    "rejectedStatusInd": "",
                    "isReverse": ""
                }
            }]
        }
    }

    // CB009-Composite API-營運量-放款餘額第二層
    // CB010-Composite API-營運量-進出口實績第二層
    
    // CB011-Composite API-營運量-TMU額度第二層

    // CB021-Composite API-基本資訊-貢獻度第二層
=======
>>>>>>> d2d303182659761122acca973a62cd18e52751e9
    // CB022-Composite API-基本資訊-訊息通知


    getDummyData(url: string, dtoResponse: any): Promise<any> {
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

            // CB007-Composite API-基本資訊-營運量第一層
            case this.URL.PRODUCT_ASSETS_LIBILITIES:
                returnData = this.assetsLibilites
                break;
            // CB008-Composite API-營運量-存款餘額第二層 
            case this.URL.PRODUCT_DEPOSIT_DETAIL:

                break;
            // CB009-Composite API-營運量-放款餘額第二層
            case this.URL.PRODUCT_LOAN_DETAIL:

                break;
            // CB010-Composite API-營運量-進出口實績第二層
            case this.URL.PRODUCT_IMPORT_EXPORT_DETAIL:

                break;
            // CB011-Composite API-營運量-TMU額度第二層
            case this.URL.PRODUCT_TMU_DETAIL:

                break;

            // CB012-Composite API-基本資訊-公司資訊第一層
            case this.URL.CUSTPROFILE_COMPANY:
                returnData = this.company;
                break;

            // CB013-Composite API-基本資訊-公司資訊第二層
            // CB028-Composite API-基本資訊-個人關聯戶第一層
            // CB014-Composite API-基本資訊-個人關聯戶第二層(關聯戶基本資訊)
            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE:
                returnData = this.companyAssociate;
                break;

            // CB015-Composite API-基本資訊-個人關聯戶第二層(客戶資產負債)
            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS:
                returnData = this.companyAssociateAssets;
                break;

            // CB016-Composite API-基本資訊-集團資訊第一層
            // CB017-Composite API-基本資訊-集團資訊第二層
            // CB018-Composite API-基本資訊-經管資訊第一層
            // CB019-Composite API-基本資訊-經管資訊第二層

            // CB020-Composite API-基本資訊-貢獻度第一層
            case this.URL.CUSTPROFILE_CONTRIBUTION:
                returnData = this.contribution;
                break;

            // CB021-Composite API-基本資訊-貢獻度第二層
            case this.URL.CUSTPROFILE_CONTRIBUTION_DETAIL:
                returnData = this.contribution;
                break;

            // CB022-Composite API-基本資訊-訊息通知
        }

        return new Promise((resolve, reject) => {
            resolve(plainToClass(dtoResponse, returnData));
            reject();
        });
    }
}
