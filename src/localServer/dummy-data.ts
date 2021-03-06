import { plainToClass } from "class-transformer";

export class DummyData {
    // URLs
    URL = require('src/app/objects/url/url.json');

    //CB001-Composite API
    getCBAoProfile = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "loginId": "jeweltest01",
            "employeeName": "jeweltestEmployeeName",
            "trustKey": "jeweltestToken001"
        }
    };

    //CB-005-Composite API
    companyList = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": "225.225.225.225",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "bossId": "NT81752",
            "records": [{
                "customerId": "03546618",
                "customerName": "Busto Aa",
                "parentCompanyId": "GP12345",
                "parentCompanyName": "Ja",
                "aoEmpCode": "NT54138",
                "aoEmpName": "V",
                "approvalGrade": "4+",
                "rorwa": 0.0036,
                "raroc": 0.0036,
                "lastYearAccumContri": 100000000,
                "thisYearAccumContri": 120000000,
                "totalDepositBal": 120000000,
                "totalLoanBal": 100000000,
                "totalTradeFinanceBal": 100000000,
                "manageBranchCode": "1234",
                "manageBranchName": "A",
                "loanTransferBranchCode": "5678",
                "loanTransferBranchName": "B",
                "coreCompany": "N",
                "creditInd": "N",
                "payrollComInd": "N",
                "geblnd": "N",
                "blackListInd": "N"
            }, {
                "customerId": "03546619",
                "customerName": "Custo Aa",
                "parentCompanyId": "GP12345",
                "parentCompanyName": "fa",
                "aoEmpCode": "NT54138",
                "aoEmpName": "z",
                "approvalGrade": "4+",
                "rorwa": 0.0036,
                "raroc": 0.0036,
                "lastYearAccumContri": 100000000,
                "thisYearAccumContri": 120000000,
                "totalDepositBal": 120000000,
                "totalLoanBal": 100000000,
                "totalTradeFinanceBal": 100000000,
                "manageBranchCode": "1234",
                "manageBranchName": "T",
                "loanTransferBranchCode": "5678",
                "loanTransferBranchName": "T",
                "coreCompany": "Y",
                "creditInd": "Y",
                "payrollComInd": "N",
                "geblnd": "N",
                "blackListInd": "N"
            }
            ]
        }
    }

    // CB006
    allNotification = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {}
    }

    // CB007-Composite API-營運量-第一層
    assetsLibilites = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "A111111112",
            "deposit": "存款餘額",
            "depositMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "depositBal": [7777, 2222, 3333, 4444, 5555, 4444, 3333, 2222, 1111, 7777, 8888, 9999, 6666],
            "loan": "放款餘額",
            "loanMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "loanBal": [5555, 4444, 3333, 2222, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999],
            "tradeFinance": "貿融餘額",
            "tradeFinanceMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "tradeFinanceBal": [1111, 2222, 3333, 4444, 5555, 4444, 3333, 2222, 1111, 7777, 8888, 9999, 6666],
            "import": "進口實績",
            "importMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "importAmt": [5555, 4444, 3333, 2222, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999],
            "export": "出口實績",
            "exportMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "exportAmt": ["1111", "2222", "3333", "4444", "5555", "4444", "3333", "2222", "1111", "7777", "8888", "9999", "6666"],
            "tmu": "TMU額度使用率",
            "tmuMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "tmuUsage": [0.1887, 0.2887, 0.5777, 0.1557, 0.3447, 0.4337, 0.1227, 0.6317, 0.1997, 0.2887, 0.7227, 0.3337, 0.8447],
            "mtm": "MTM額度使用率",
            "mtmMon": ["201809", "201810", "201811", "201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "201908", "201909"],
            "mtmUsage": [0.2338, 0.5155, 0.3117, 0.5259, 0.7359, 0.3898, 0.2515, 0.1318, 0.1371, 0.3916, 0.5708, 0.4321, 0.22288],
            "currentValue": {
                "currentDeposit": 12345,
                "currentLoan": 34567,
                "currentTradeFinance": 76543,
                "currentImport": 56789,
                "currentExport": 98765,
                "currentTmu": 0.6,
                "currentMtm": 1.04
            }
        }
    }

    // CB008-Composite API-營運量-存款餘額第二層
    depositDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "A111111112",
            "assets": {
                "ntdAssets": {
                    "sd": 4444,
                    "td": 6666,
                    "cd": 8888
                },
                "fxAssets": {
                    "sd": 7777,
                    "td": 8888,
                    "cd": 2222
                },
                "sumAssets": {
                    "sd": 6666,
                    "td": 4444,
                    "cd": 3333
                },
                "r6mthAvgBal": {
                    "sd": 1234,
                    "td": 6543,
                    "cd": 9876
                }
            },
            "sdDetail": [{
                "acctNbr": "2282-441-025866",
                "currencyCode": "美金",
                "fxCurrentBal": 11,
                "ntdCurrentBal": 22,
                "currentIntRate": 0.00,
                "ftpRate": 0.021,
                "sdRemark": {
                    "accBranchCode": "00018",
                    "payrollCodeDtl": "Y",
                    "isTrust": "Y",
                    "isSecurities": "Y",
                    "isReverse": "Y"
                }
            }, {
                "acctNbr": "1234-441-654321",
                "currencyCode": "台幣",
                "fxCurrentBal": 22,
                "ntdCurrentBal": 11,
                "currentIntRate": 0.02,
                "ftpRate": 0.01,
                "sdRemark": {
                    "accBranchCode": "00019",
                    "payrollCodeDtl": "N",
                    "isTrust": "N",
                    "isSecurities": "N",
                    "isReverse": "N"
                }
            }],
            "tdDetail": [{
                "acctNbr": "9871-354-576577",
                "currencyCode": "美金",
                "fxCurrentBal": 1133,
                "ntdCurrentBal": 3242,
                "currentIntRate": 0.05,
                "ftpRate": 0.43,
                "acctOpenDate": "20190401",
                "tdDueDate": "20191130"
            },
            {
                "acctNbr": "7657-897-342344",
                "currencyCode": "日幣",
                "fxCurrentBal": 8383,
                "ntdCurrentBal": 7868,
                "currentIntRate": 0.023,
                "ftpRate": 0.23,
                "acctOpenDate": "20190330",
                "tdDueDate": "20191015"
            }],
            "cdDetail": [{
                "acctNbr": "4444-441-025866",
                "ntdCurrentBal": "1234",
                "cdRemark": {
                    "dishY3ChkCnt": "5",
                    "dishCancelY3ChkCnt": "2",
                    "rejectedStatusInd": "",
                    "isReverse": "Y"
                }
            }, {
                "acctNbr": "2222-333-567890",
                "ntdCurrentBal": "4321",
                "cdRemark": {
                    "dishY3ChkCnt": "2",
                    "dishCancelY3ChkCnt": "5",
                    "rejectedStatusInd": "",
                    "isReverse": "N"
                }
            }, {
                "acctNbr": "1111-555-987654",
                "ntdCurrentBal": "7896",
                "cdRemark": {
                    "dishY3ChkCnt": "6",
                    "dishCancelY3ChkCnt": "3",
                    "rejectedStatusInd": "",
                    "isReverse": "Y"
                }
            }]
        }
    }

    // CB009-Composite API-營運量-放款餘額第二層
    loanDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "A123456789",
            "totLoan": {
                "totAmt": 3274888,
                "totBal": 1919345
            },
            "facilityDetail": [
                {
                    "facilityNbr": "1000000002",
                    "facRecords": [
                        {
                            "breakdownCodeDesc": "週轉金(信用)",
                            "facdCurrencyCode": "新台幣",
                            "facdFxLimitAmt": 88888,
                            "sumLbFxCurrentBal": 44444,
                            "sumLbNtdCurrentBal": 44444,
                            "negotiatPriceCode": "N",
                            "collateralCodeDesc": "有價證券",
                            "limitStatusCodeDesc": "逾可動用期限",
                            "breakRecords": [
                                {
                                    "accNbr": "14APLN-998877",
                                    "lbCurrencyCode": "日幣",
                                    "lbCurrentIntRate": 0.0121,
                                    "lbFxCurrentBal": 99999,
                                    "lbNtdCurrentBal": 99999,
                                    "firstFundingDate": "20190222",
                                    "acctDueDate": "20190313",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-887766",
                                    "lbCurrencyCode": "美金",
                                    "lbCurrentIntRate": 0.0221,
                                    "lbFxCurrentBal": 88888,
                                    "lbNtdCurrentBal": 88888,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-776655",
                                    "lbCurrencyCode": "人民幣",
                                    "lbCurrentIntRate": 0.0321,
                                    "lbFxCurrentBal": 77777,
                                    "lbNtdCurrentBal": 77777,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                            ]
                        }
                        ,
                        {
                            "breakdownCodeDesc": "進口遠期信用狀",
                            "facdCurrencyCode": "澳門幣",
                            "facdFxLimitAmt": 77777,
                            "sumLbFxCurrentBal": 44444,
                            "sumLbNtdCurrentBal": 44444,
                            "negotiatPriceCode": "N",
                            "collateralCodeDesc": "汽車",
                            "limitStatusCodeDesc": "逾可動用期限",
                            "breakRecords": [
                                {
                                    "accNbr": "14APLN-998877",
                                    "lbCurrencyCode": "日幣",
                                    "lbCurrentIntRate": 0.0121,
                                    "lbFxCurrentBal": 99999,
                                    "lbNtdCurrentBal": 99999,
                                    "firstFundingDate": "20190222",
                                    "acctDueDate": "20190313",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-887766",
                                    "lbCurrencyCode": "美金",
                                    "lbCurrentIntRate": 0.0221,
                                    "lbFxCurrentBal": 88888,
                                    "lbNtdCurrentBal": 88888,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-776655",
                                    "lbCurrencyCode": "人民幣",
                                    "lbCurrentIntRate": 0.0321,
                                    "lbFxCurrentBal": 77777,
                                    "lbNtdCurrentBal": 77777,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                            ]
                        }
                    ]
                }
                ,
                {
                    "facilityNbr": "1000000003",
                    "facRecords": [
                        {
                            "breakdownCodeDesc": "週轉金(信用)",
                            "facdCurrencyCode": "日幣",
                            "facdFxLimitAmt": 11111,
                            "sumLbFxCurrentBal": 22222,
                            "sumLbNtdCurrentBal": 33333,
                            "negotiatPriceCode": "N",
                            "collateralCodeDesc": "其他有價證券",
                            "limitStatusCodeDesc": "逾可動用期限",
                            "breakRecords": [
                                {
                                    "accNbr": "14APLN-112233",
                                    "lbCurrencyCode": "澳幣",
                                    "lbCurrentIntRate": 0.0421,
                                    "lbFxCurrentBal": 11111,
                                    "lbNtdCurrentBal": 11111,
                                    "firstFundingDate": "20190101",
                                    "acctDueDate": "20190303",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-223344",
                                    "lbCurrencyCode": "韓幣",
                                    "lbCurrentIntRate": 0.0521,
                                    "lbFxCurrentBal": 22222,
                                    "lbNtdCurrentBal": 22222,
                                    "firstFundingDate": "20190202",
                                    "acctDueDate": "20190404",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-334455",
                                    "lbCurrencyCode": "歐元",
                                    "lbCurrentIntRate": 0.0621,
                                    "lbFxCurrentBal": 33333,
                                    "lbNtdCurrentBal": 33333,
                                    "firstFundingDate": "20190202",
                                    "acctDueDate": "20190404",
                                    "acctStatusCodeDesc": "正常"
                                }
                            ]
                        }
                        ,
                        {
                            "breakdownCodeDesc": "週轉金(不動產)",
                            "facdCurrencyCode": "港幣",
                            "facdFxLimitAmt": 77777,
                            "sumLbFxCurrentBal": 44444,
                            "sumLbNtdCurrentBal": 44444,
                            "negotiatPriceCode": "N",
                            "collateralCodeDesc": "不動產",
                            "limitStatusCodeDesc": "逾可動用期限",
                            "breakRecords": [
                                {
                                    "accNbr": "14APLN-998877",
                                    "lbCurrencyCode": "日幣",
                                    "lbCurrentIntRate": 0.0121,
                                    "lbFxCurrentBal": 99999,
                                    "lbNtdCurrentBal": 99999,
                                    "firstFundingDate": "20190222",
                                    "acctDueDate": "20190313",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-887766",
                                    "lbCurrencyCode": "美金",
                                    "lbCurrentIntRate": 0.0221,
                                    "lbFxCurrentBal": 88888,
                                    "lbNtdCurrentBal": 88888,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-776655",
                                    "lbCurrencyCode": "人民幣",
                                    "lbCurrentIntRate": 0.0321,
                                    "lbFxCurrentBal": 77777,
                                    "lbNtdCurrentBal": 77777,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                            ]
                        }
                        ,
                        {
                            "breakdownCodeDesc": "週轉金(動產)",
                            "facdCurrencyCode": "越南盾",
                            "facdFxLimitAmt": 77777,
                            "sumLbFxCurrentBal": 44444,
                            "sumLbNtdCurrentBal": 44444,
                            "negotiatPriceCode": "N",
                            "collateralCodeDesc": "遊艇",
                            "limitStatusCodeDesc": "逾可動用期限",
                            "breakRecords": [
                                {
                                    "accNbr": "14APLN-998877",
                                    "lbCurrencyCode": "日幣",
                                    "lbCurrentIntRate": 0.0121,
                                    "lbFxCurrentBal": 99999,
                                    "lbNtdCurrentBal": 99999,
                                    "firstFundingDate": "20190222",
                                    "acctDueDate": "20190313",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-887766",
                                    "lbCurrencyCode": "美金",
                                    "lbCurrentIntRate": 0.0221,
                                    "lbFxCurrentBal": 88888,
                                    "lbNtdCurrentBal": 88888,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-776655",
                                    "lbCurrencyCode": "人民幣",
                                    "lbCurrentIntRate": 0.0321,
                                    "lbFxCurrentBal": 77777,
                                    "lbNtdCurrentBal": 77777,
                                    "firstFundingDate": "20190505",
                                    "acctDueDate": "20190606",
                                    "acctStatusCodeDesc": "正常"
                                }
                            ]
                        }
                    ]
                }
                ,
                {
                    "facilityNbr": "1000000004",
                    "facRecords": [
                        {
                            "breakdownCodeDesc": "週轉金(信用)",
                            "facdCurrencyCode": "美金",
                            "facdFxLimitAmt": 44444,
                            "sumLbFxCurrentBal": 55555,
                            "sumLbNtdCurrentBal": 66666,
                            "negotiatPriceCode": "N",
                            "collateralCodeDesc": "債券",
                            "limitStatusCodeDesc": "逾可動用期限",
                            "breakRecords": [
                                {
                                    "accNbr": "14APLN-667788",
                                    "lbCurrencyCode": "辛巴威幣",
                                    "lbCurrentIntRate": 0.0721,
                                    "lbFxCurrentBal": 44444,
                                    "lbNtdCurrentBal": 44444,
                                    "firstFundingDate": "20190101",
                                    "acctDueDate": "20190303",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-778899",
                                    "lbCurrencyCode": "比特幣",
                                    "lbCurrentIntRate": 0.0821,
                                    "lbFxCurrentBal": 55555,
                                    "lbNtdCurrentBal": 55555,
                                    "firstFundingDate": "20190202",
                                    "acctDueDate": "20190404",
                                    "acctStatusCodeDesc": "正常"
                                }
                                ,
                                {
                                    "accNbr": "14APLN-889900",
                                    "lbCurrencyCode": "英鎊",
                                    "lbCurrentIntRate": 0.0921,
                                    "lbFxCurrentBal": 66666,
                                    "lbNtdCurrentBal": 66666,
                                    "firstFundingDate": "20190202",
                                    "acctDueDate": "20190404",
                                    "acctStatusCodeDesc": "正常"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    // CB010-Composite API-營運量-進出口實績第二層
    importExportDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "A111111112",
            "import": [
                {
                    "txnTypeDesc": "進口託收",
                    "mon": ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [40001, 70000, 70000, 10000, 10000, 10000, 10000, 10000]
                },
                {
                    "txnTypeDesc": "信用狀開狀",
                    "mon": ["201811", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [50000, 80000, 90000, 10000, 10000, 10000, 10000, 10000]
                },
                {
                    "txnTypeDesc": "拖收到單",
                    "mon": ["201810", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [60000, 90000, 60000, 10000, 10000, 10000, 10000, 10000]
                },
                {
                    "txnTypeDesc": "信用狀信用",
                    "mon": ["201810", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [70000, 70000, 50000, 10000, 10000, 10000, 10000, 10000]
                }
            ],
            "export": [
                {
                    "txnTypeDesc": "出口OA",
                    "mon": ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888]

                },
                {
                    "txnTypeDesc": "出口押匯",
                    "mon": ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [8888, 7777, 6666, 5555, 4444, 3333, 2222, 1111]
                },
                {
                    "txnTypeDesc": "出口托收",
                    "mon": ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [9999, 8888, 7777, 6666, 5555, 4444, 3333, 2222]
                },
                {
                    "txnTypeDesc": "用狀信用",
                    "mon": ["201810", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
                    "usdTxnAmt": [2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999]
                }
            ]
        }
    }

    // CB011-Composite API-營運量-TMU額度第二層
    tmuDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "A111111112",
            tmuTransAmt: [
                {
                    "customerId": "A111111112",
                    "amountType": "金融交易額度",
                    "amountExpDate": "20191212",
                    "amountAmt": 50000,
                    "usageAmt": 5000,
                    "lastAvailAmt": 45000,
                    "amountUseRate": 0.019
                },
                {
                    "customerId": "A111111112",
                    "amountType": "避險交易額度",
                    "amountExpDate": "20180204",
                    "amountAmt": 10000,
                    "usageAmt": 55000,
                    "lastAvailAmt": 45000,
                    "amountUseRate": 0.044
                },
                {
                    "customerId": "A111111112",
                    "amountType": "評價損失額度 (MTM)",
                    "amountExpDate": "20190315",
                    "amountAmt": 670000,
                    "usageAmt": 360000,
                    "lastAvailAmt": 210000,
                    "amountUseRate": 0.013
                },
                {
                    "customerId": "A111111112",
                    "amountType": "初始擔保品",
                    "amountExpDate": "20201111",
                    "amountAmt": 654321,
                    "usageAmt": 12345,
                    "lastAvailAmt": 641976,
                    "amountUseRate": 0.0337
                },
                {
                    "customerId": "A111111112",
                    "amountType": "超限擔保品",
                    "amountExpDate": "20200101",
                    "amountAmt": 999999,
                    "usageAmt": 77777,
                    "lastAvailAmt": 222222,
                    "amountUseRate": 0.01
                }
            ],
            tmuInvesment: [
                {
                    "invesTypeCode": "基金",
                    "productDesc": "國外-安聯(盧森堡)亞洲靈活債劵基金AM-美元-穩定配權",
                    "prodCurrencyDesc": "美元",
                    "referenceNetvalue": 2000,
                    "fxCurrentValue": 3000,
                    "startDate": "20191212",
                    "endDate": "20201212"
                },
                {
                    "invesTypeCode": "國外有價證券",
                    "productDesc": "國內-全聯(熱狗堡)亞洲靈活債劵基金AM-新台幣-穩定配息",
                    "prodCurrencyDesc": "新台幣",
                    "referenceNetvalue": 7777,
                    "fxCurrentValue": 8888,
                    "startDate": "20190405",
                    "endDate": "20191213"
                },
                {
                    "invesTypeCode": "組合式商品(DCI/PPCD/SI)",
                    "productDesc": "國內-美聯社(潛艇堡)亞洲靈活債劵基金AM-日幣-穩定配息",
                    "prodCurrencyDesc": "日幣",
                    "referenceNetvalue": 8888,
                    "fxCurrentValue": 6666,
                    "startDate": "20180819",
                    "endDate": "20200707"
                },
                {
                    "invesTypeCode": "保險",
                    "productDesc": "國外-屈臣氏(牛肉堡)亞洲靈活債劵基金AM-人民幣-穩定配權",
                    "prodCurrencyDesc": "人民幣",
                    "referenceNetvalue": 4321,
                    "fxCurrentValue": 8765,
                    "startDate": "20170910",
                    "endDate": "20210203"
                },
                {
                    "invesTypeCode": "自營債券",
                    "productDesc": "國內-麥當勞(豬肉堡)亞洲靈活債劵基金AM-韓元-穩定配息",
                    "prodCurrencyDesc": "韓元",
                    "referenceNetvalue": 6876,
                    "fxCurrentValue": 2131,
                    "startDate": "20191130",
                    "endDate": "20201225"
                }
            ],
            tmuContribution: {
                "derivative": 777777,
                "wms": 200077,
                "fxSport": 500077
            }
        }
    }

    // CB012-Composite API-基本資訊-公司資訊第一層
    company = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "87878787",
            "approvalGrade": "5+",
            "rorwa": 1.34,
            "raroc": 1.58,
            "totalRelAssetBal": 222.33,
            "totalRelCreditLimit": 151542,
            "totalRelLiabilitiesBal": 8978789.88,
            "tcriLevel": "5",
            "customerName": "草尼馬股份有限公司",
            "industryCode": "娛樂業",
            "compFlag": ["集團核心", "授信戶", "薪轉戶", "企網銀", "黑名單"],
            "nextReviewDate": "20201021",
            "aoType": "AO",
            "manageBranchName": "企企區中",
            "aoEmpCode": "81752",
            "aoEmpName": "葉又萱",
            "parentCompanyId": "GP000013"
        }
    }

    // CB013-Composite API-基本資訊-公司資訊第二層
    companyDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "87878787",
            "customerName": "草尼馬股份有限公司",
            "stockCode": "0730",
            "capitalAmt": 180000000,
            "realCapitalAmt": 138629906,
            "establishmentDate": "19740202",
            "chiefName": "李宛靜",
            "registerAddress": "台北市信義區松仁路9號",
            "residenceAddress": "高雄市苓雅區自強三路5號",
            "address": "新北市土城區中山路66號",
            "personInCharge": {
                "name": "林金霖",
                "age": "65",
                "birth": "6",
                "aum": "9612",
                "tags": ["酒", "高爾夫"],
                "contries": ["菲律賓", "加拿大"]
            },
            "mate": {
                "name": "王弈",
                "age": "21",
                "birth": "5",
                "aum": "1485",
                "tags": ["酒", "高爾夫"],
                "contries": ["菲律賓", "加拿大"]
            },
            "contactPersons": [
                {
                    "name": "徐以威",
                    "title": "財務長",
                    "tel": "02 8722 6666 #7169"
                },
                {
                    "name": "尤昕寧",
                    "title": "經辦小姐",
                    "tel": "02 8722 6666 #7155"
                }
            ]
        }
    }

    // CB014-Composite API-基本資訊-個人關聯戶第二層(關聯戶基本資訊)
    companyAssociate = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "records": [
                {
                    "customerId": "A111111112",
                    "customerName": "xxx",
                    "relationDesc": "負責人",
                    "vipTypeCode": "HVIP",
                    "wmAoName": "Camile",
                    "wmAoBranchDesc": "忠孝分行",
                    "isAmlGovInd": "N",
                    "employeeInd": "N",
                    "ccVip1Ind": "N",
                    "cubManagerInd": "N",
                    "lowMarketingInd": "N",
                    "blackListInd": "N",
                    "secretInd": "N"
                },
                {
                    "customerId": "A123456789",
                    "customerName": "Witter",
                    "relationDesc": "董事長",
                    "vipTypeCode": "VVIP",
                    "wmAoName": "Jewel",
                    "wmAoBranchDesc": "珠寶分行",
                    "isAmlGovInd": "Y",
                    "employeeInd": "Y",
                    "ccVip1Ind": "Y",
                    "cubManagerInd": "Y",
                    "lowMarketingInd": "Y",
                    "blackListInd": "Y",
                    "secretInd": "Y"
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
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerid": "A111111112",
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
    group = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "parentCompanyId": "GP000013",
            "parentCustomerName": "增你強集團",
            "rorwa": 123.456,
            "raroc": 654.321
        }
    }

    // CB017-Composite API-基本資訊-集團資訊第二層
    groupDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "parentCompanyId": "GP000013",
            "parentCustomerName": "增你強集團",
            "groupInfo": {
                "sumLastYearAccumContri": 10000000,
                "sumThisYearAccumContri": 12000000,
                "sumTotalDepositBal": 5000000,
                "sumTotalLoanBal": 0,
                "sumTotalTradeFinanceBal": 2500000
            },
            "groupMemberLoanInfo": [
                {
                    "customerId": "12401698",
                    "customerName": "增你強股份有限公司",
                    "breakdownCodeDesc": "週轉金(信用)",
                    "sumfacdFxLimitAmt": 1000000,
                    "sumLbFxCurrentBal": 500000
                },
                {
                    "customerId": "80156546",
                    "customerName": "建洋實業股份有限公司",
                    "breakdownCodeDesc": "進口遠期信用狀 ",
                    "sumfacdFxLimitAmt": 2000000,
                    "sumLbFxCurrentBal": 500000
                }
            ]
        }
    }

    // CB019-Composite API-基本資訊-經管資訊第二層
    manageDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "psId": "NT48691",
            "psName": "劉子齊",
            "psBranchCode": null,
            "psBranchDesc": "環服部",
            "tmoId": "NT83333",
            "tmoName": "毛芝瑩",
            "tmoBranchCode": null,
            "tmoBranchDesc": "金行部",
            "wmAoId": "NT81757",
            "wmAoName": "林祐辰",
            "wmAoBranchCode": null,
            "wmAoBranchDesc": "信義分行",
            "principalWmAoId": "NT81757",
            "principalWmAoName": "林祐辰",
            "principalWmAoBranchCode": null,
            "principalWmAoBranchDesc": "信義分行"
        }
    }

    // CB020-Composite API-基本資訊-貢獻度第一層
    contribution = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerid": "A1111111111",
            "contributionType": ["現金管理", "放款", "貿融", "資顧", "TMU", "其他"],
            "lastcontri": {
                "startYM": "208701",
                "endYM": "208712",
                "contribution": [10000, 20000, 30000, 40000, 50000, 60000]
            },
            "thiscontri": {
                "startYM": "208801",
                "endYM": "208812",
                "contribution": [60000, 50000, 40000, 40000, 20000, 20000]
            }
        }
    }

    // CB024 消息錦-要點新聞 第一層及第二層 (一個 api 即可)
    // CB024-Composite API  消息錦-要點新聞第二層
    companyNewsList = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerid": "A1111111111",
            "newsList": [
                {
                    "id": "n001",
                    "paper": "中時電子報",
                    "date": "2019-11-03",
                    "title": "經營之神看走眼？他爆王永慶曾評台積電這3字",
                    "tag": "+",
                    "content": "<p>台積電（2330）股價衝衝衝，昨天（19日）收在315元，再創歷史新高，惟今天股價稍做休息，收在313.5元。台積電晶圓代工先進製程領先全球，投資人都看好搶進，不過，「經營之神」台塑集團創辦人王永慶長子王文洋爆料，對電子產業不熟悉王永慶曾跟他說「台積電沒前途」，台塑集團還賣掉全部台積電持股。</p><p>鏡週刊報導，王文洋透露，早期台塑曾投資台積電，他還當過第一屆董事，「是我們聘請張忠謀當董事長的」，但他說「我爸爸他們覺得這種公司沒前途，說我不懂」，並將台積電持股全賣掉，他覺得相當惋惜。</p><p>台塑集團創辦人王永慶於2008年過世，時任台積電董事長的張忠謀曾感嘆王永慶是「時代巨人」，強調台積電成立之初，王永慶是很重要的投資人，沒有王永慶就沒有現在的台積電，並表示與他有多次會面，很佩服和敬仰他。</p>"
                },
                {
                    "id": "n002",
                    "paper": "非凡商業周刊",
                    "date": "2019-11-02",
                    "title": "富爸爸帶小金雞搶市 台積電集團強棒輩出",
                    "tag": "+",
                    "content": "<p>台積電（2330）股價近期來到300元，市值突破8兆元新台幣，擠入全球前20大市值企業，超越半導體巨擘英特爾，成為全球半導體指標企業，也帶動台股加權指數改寫29年半新高。</p><p>5G商機7奈米訂單滿載</p><p>台積電2018年以261種製程技術，為481家客戶生產1.4萬多種產品，可見台積電對我們日常生活的影響力無所不在，中美貿易戰開打1年多，台積電獲利不受影響，股價頻創新高，就是靠著不斷演進的製程奠定領先地位，全球5G（第5代行動通訊）的商轉，更讓台積電7奈米製程訂單滿載。</p><p>觀察台積電今年前3季財報表現，營收年增1.5%，毛利率44.3%，營益率33%，稅後每股純益8.84元，預估明年現金股息至少10元以上，採每季配息更是受到外資歡迎，法說會預估第4季營收達102億美元～103億美元，季增約8.5%～9.6%，中位數為9%，毛利率估48%～50%，營益率37%～39%，雙率均較第3季成長，受惠7奈米製程順利推進，第4季目標是：毛利率50%、營益率39%。第4季業績表現更好，讓外資紛紛提高台積電目標價，目前外資圈給台積電最高目標價，仍是花旗的364元，其次為高盛的355元，摩根大通、麥格理和美銀皆給與350元，各家外資目標價可參考表2。</p><p>台積電上調5G智慧型手機的滲透率展望，由個位數成長上修到15%左右，宣布全年資本支出由原先的100億美元～110億美元，大舉調高至140億美元～150億美元，將繼續保持晶圓製程領先地位。</p><p>台積不怕禁令外資喊進</p><p>在中美貿易戰中，當川普在5月16日宣布華為禁售令，台積電5月17日立即宣布將繼續出貨華為，理由是：「內部做過評估，國外的法律事務所也幫我們看過，結論是我們沒有超過25%。」台積電發言體系解釋，歸功於內部發展超過10年的出口管控系統，這套系統由當時任職台積電法務長的美籍律師建立，成立層級極高的出口管制委員會，由法務、晶圓廠營運、研發、行銷與業務、採購、人資等6大部門最高主管參與。</p>"
                },
                {
                    "id": "n003",
                    "paper": "鉅亨網",
                    "date": "2019-11-01",
                    "title": "台積電Q3每股配息2.5元 明年3/19除息",
                    "tag": "+",
                    "content": "<p>晶圓代工龍頭台積電 (2330-TW) 今 (12) 日召開董事會，通過多項議案，核准今年第 3 季每股配 2.5 元現金股利，預計明年 3 月 19 日除息；並通過將在日本設立 100% 持股子公司，擴充設計服務中心，為客戶提供工程支援服務。</p><p>台積電今年股東會通過，每季董事會將核准通過分季分配現金股利，今年第 1 季每股已配息 2 元，第 2 季配息 2.5 元，將於 12 月 19 日除息，董事會今日通過，第 3 季每股將配息 2.5 元，維持上季配息水準。台積電先前也多次強調，明年起每年現金股利，將在 10 元以上。</p><p>台積電表示，第 3 季配息基準日為明年 3 月 25 日，將於 3 月 19 日除息，依公司法規定，在公司決定分派股息之基準日前 5 日內，即明年 3 月 21 日至 3 月 25 日止，停止普通股股票過戶，並在 2020 年 4 月 16 日發放股利，美國紐約證券交易所上市的美國存託憑證，除息交易日也為 3 月 19 日， 與普通股一致。</p><p>台積電也核准資本預算案新台幣 1998.745 億元，其中包括興建廠房及廠務設施工程，建置與升級先進製程產能，建置特殊製程產能，及明年第 1 季研發資本預算與經常性資本預算。台積電並核准資本預算新台幣 32.47 億元，用於支應明年上半年資本化租賃資產。</p><p>除配息與資本預算案外，台積電董事會也通過，核准於日本投資設立 100% 持股子公司，以擴充設計服務中心，為客戶提供工程支援服務，目前台積電僅在台灣、美國與中國設有設計服務中心，未來日本子公司將成為台積電在全球第 4 個設計服務中心。</p><p>台積電董事會也通過，核准任命翁銘莉女士擔任會計主管，自今年 11 月 13 日起生效。</p>"
                }
            ]
        }
    }

    // CB025-Composite API 消息集錦-銀行同業第一層
    newsBankList = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "PreDate": "1564617600",
            "LastDate": "1570665600",
            "banksList": [
                {
                    "bank": "國泰世華",
                    "valChange": "+100",
                    "totalChange": "+100"
                },
                {
                    "bank": "富邦銀行",
                    "valChange": "-100",
                    "totalChange": "-100"
                },
                {
                    "bank": "玉山銀行",
                    "valChange": "0",
                    "totalChange": "0"
                },
                {
                    "bank": "中國信託",
                    "valChange": "0",
                    "totalChange": "0"
                }
            ]
        }
    }


    // CB026-Composite API 消息集錦-銀行同業第二層
    newsBanksDetail = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "PreDate": "2019-08-01",
            "LastDate": "2019-10-10",
            "banksInfo": [
                {
                    "bankName": "國泰世華",
                    "LastDateInfo": {
                        "amount": 1000,
                        "total": 50000,
                        "guarantee": "房屋"
                    },
                    "PreDateInfo": {
                        "amount": 500,
                        "total": 40000,
                        "guarantee": "房屋"
                    },
                    "changeInfo": {
                        "amount": "+500",
                        "total": "+10000"
                    }
                },
                {
                    "bankName": "富邦銀行",
                    "LastDateInfo": {
                        "amount": 2000,
                        "total": 3000,
                        "guarantee": "房屋"
                    },
                    "PreDateInfo": {
                        "amount": 1500,
                        "total": 2000,
                        "guarantee": "房屋"
                    },
                    "changeInfo": {
                        "amount": "+500",
                        "total": "+1000"
                    }
                },
                {
                    "bankName": "玉山銀行",
                    "LastDateInfo": {
                        "amount": 2000,
                        "total": 3000,
                        "guarantee": "房屋"
                    },
                    "PreDateInfo": {
                        "amount": 1000,
                        "total": 3000,
                        "guarantee": "房屋"
                    },
                    "changeInfo": {
                        "amount": "+1000",
                        "total": "+0"
                    }
                },
            ]
        }
    }

    // CB027-Composite API": "客戶歷程"
    custHistoryList = {
        "header": {
            "apId": "CRMLXCRM01",
            "branchId": "00081",
            "employeeId": "13063",
            "clientIp": " 255.255.255.255",
            "role": "經辦",
            "roleCode": "01",
            "txnDateTime": "20190801140647462",
            "returnCode": "0000",
            "returnDesc": "交易成功"
        },
        "body": {
            "customerId": "mongodb_id",
            "updateDate": "2019/12/25",
            "journey": [
                {
                    "category": "放款",
                    "date": "2019/04/26",
                    "channel": "Myb2b",
                    "channelDetail": "企金授信_還款_工商貸款"
                },
                {
                    "category": "存款",
                    "date": "2019/04/15",
                    "channel": "Myb2b",
                    "channelDetail": "台幣存匯轉帳自行轉帳"
                },
                {
                    "category": "存款",
                    "date": "2019/04/10",
                    "channel": "ATM",
                    "channelDetail": "台幣存匯_轉帳_自行轉帳"
                },
                {
                    "category": "存款",
                    "date": "2019/04/01",
                    "channel": "樹林分行",
                    "channelDetail": "台整存匯提款自行提款"
                },
                {
                    "category": "負責人",
                    "date": "2019/03/28",
                    "channel": "mybank",
                    "channelDetail": "轉帳繳他人信用卡款"
                },
                {
                    "category": "負責人",
                    "date": "2019/02/28",
                    "channel": "網銀",
                    "channelDetail": "個金授信_還款_房屋貸款"
                },
                {
                    "category": "放款",
                    "date": "2019/02/25",
                    "channel": "系統作業",
                    "channelDetail": "外幣授信_撥款_購置不動產"
                }
            ]
        }
    }

    getDummyData(url: string, dtoRequest: any, dtoResponse: any) {
        let returnData: any;

        switch (url) {
            // 首頁總覽-經管名單列表 <<假的>>
            case this.URL.FIRSTPAGE_AO_PROFILE:
                returnData = this.getCBAoProfile;
                break;

            // 首頁總覽-經管名單列表 <<假的>>
            case this.URL.FIRSTPAGE_COMPANY_LIST:
                returnData = this.companyList;
                break;

            // CB007-Composite API-基本資訊-營運量第一層
            case this.URL.PRODUCT_ASSETS_LIBILITIES:
                returnData = this.assetsLibilites;
                break;
            // CB008-Composite API-營運量-存款餘額第二層
            case this.URL.PRODUCT_DEPOSIT_DETAIL:
                returnData = this.depositDetail;
                break;
            // CB009-Composite API-營運量-放款餘額第二層
            case this.URL.PRODUCT_LOAN_DETAIL:
                returnData = this.loanDetail;
                break;
            // CB010-Composite API-營運量-進出口實績第二層
            case this.URL.PRODUCT_IMPORT_EXPORT_DETAIL:
                returnData = this.importExportDetail;
                break;
            // CB011-Composite API-營運量-TMU額度第二層
            case this.URL.PRODUCT_TMU_DETAIL:
                returnData = this.tmuDetail;
                break;

            // CB012-Composite API-基本資訊-公司資訊第一層
            case this.URL.CUSTPROFILE_COMPANY:
                returnData = this.company;
                break;

            // CB013-Composite API-基本資訊-公司資訊第二層
            case this.URL.CUSTPROFILE_COMPANY_DETAIL:
                returnData = this.companyDetail;
                break;

            // CB014-Composite API-基本資訊-個人關聯戶第二層(關聯戶基本資訊)
            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE:
                returnData = this.companyAssociate;
                break;

            // CB015-Composite API-基本資訊-個人關聯戶第二層(客戶資產負債)
            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS:
                returnData = this.companyAssociateAssets;
                break;

            // CB016-Composite API-基本資訊-集團資訊第一層
            case this.URL.CUSTPROFILE_GROUP:
                returnData = this.group;
                break;

            // CB017-Composite API-基本資訊-集團資訊第二層
            case this.URL.CUSTPROFILE_GROUP_DETAIL:
                returnData = this.groupDetail;
                break;

            // CB019-Composite API-基本資訊-經管資訊第二層
            case this.URL.CUSTPROFILE_MANAGE_DETAIL:
                returnData = this.manageDetail;
                break;

            // CB020-Composite API-基本資訊-貢獻度第一層
            case this.URL.CUSTPROFILE_CONTRIBUTION:
                returnData = this.contribution;
                break;

            // CB022-Composite API-基本資訊-訊息通知

            // CB024-Composite API  消息錦-要點新聞第二層 (and 第一層，用同一個api)
            case this.URL.NEWS_NEWS_DETAIL:
                returnData = this.companyNewsList;
                break;

            // CB025-Composite API 消息集錦-銀行同業第一層
            case this.URL.NEWS_BANKS:
                returnData = this.newsBankList;
                break;

            // CB026-Composite API  消息集錦-銀行同業第二層
            case this.URL.NEWS_BANKS_Profile:
                returnData = this.newsBanksDetail;
                break;

            // CB027-Composite API 客戶歷程
            case this.URL.JOURNEY_COMPANY_JOURNEY:
                returnData = this.custHistoryList;
                break;
        }

        return plainToClass(dtoResponse, returnData);
    }
}
