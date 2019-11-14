// dashboard-經管名單列表
const dashboard_data = [{
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
];

// CB021-Composite API-基本資訊-貢獻度第二層
const contribution2 = {
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
    "lastcontri": {
      "startym": "201712",
      "endym": "201805",
      "profittype1": "1",
      "profittype2": "2",
      "profittype3": "2",
      "profittype4": "3",
      "profittype5": "5",
      "profittype6": "6",
    },
    "thiscontri": {
      "startym": "201812",
      "endym": "201905",
      "profittype1": "10",
      "profittype2": "22",
      "profittype3": "33",
      "profittype4": "55",
      "profittype5": "55",
      "profittype6": "66",
    }
  }
}
// CB007-Composite API-營運量-第一層
const assetsLibilities = {
"header": {
    "apId": "CRMLXCRM01",
    "branchId": "00081",
    "employeeId": "13063",
    "clientIp": " 255.255.255.255",
    "txnDateTime": "20190801140647462",
    "returnCode": "0000",
    "returnDesc": "交易成功"
  },
"body":{
  "customerId":"A111111112",
  "deposit":"存款餘額",
  "depositMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "depositBal":["1111","2222","3333","4444","5555","4444","3333","2222","1111","7777","8888","9999","6666"],
  "loan":"放款餘額",
  "loanMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "loanBal":["5555","4444","3333","2222","1111","2222","3333","4444","5555","6666","7777","8888","9999"],
  "tradeFinance":"貿融餘額",
  "tradeFinanceMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "tradeFinanceBal":["1111","2222","3333","4444","5555","4444","3333","2222","1111","7777","8888","9999","6666"],
  "import":"進口實績",
  "importMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "importAmt":["5555","4444","3333","2222","1111","2222","3333","4444","5555","6666","7777","8888","9999"],
  "export":"出口實績",
  "exportMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "exportAmt":["1111","2222","3333","4444","5555","4444","3333","2222","1111","7777","8888","9999","6666"],
  "tmu":"TMU額度使用率",
  "tmuMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "tmuUsage":["0.0667","0.0887","0.0777","0.0557","0.0447","0.0337","0,0227","0.017","0.0997","0.0887","0.0227","0.0337","0.0447"],
  "mtm":"MTM額度使用率",
  "mtmMon":["201809","201810","201811","201812","201901","201902","201903","201904","201905","201906","201907","201908","201909"],
  "mtmUsage":["0.0447","0.0337","0.0227","0.0887","0.0997","0.0227","0,0117","0.0227","0.0337","0.0447","0.0557","0.0777","0.0887"],
}
}
// CB008-Composite API-營運量-存款餘額第二層
const depositDetail = {
  "header": {
    "apId": "CRMLXCRM01",
    "branchId": "00081",
    "employeeId": "13063",
    "clientIp": " 255.255.255.255",
    "txnDateTime": "20190801140647462",
    "returnCode": "0000",
    "returnDesc": "交易成功"
  },
  "body":{
    "customerId":"A111111112",
    "assets":{
      "ntdAssets":{
        "sd":"1111",
        "td":"2222",
        "cd":"3333"
      },
      "fxAssets":{
        "sd":"1111",
        "td":"2222",
        "cd":"3333"
      },
      "sumAssets":{
        "sd":"2222",
        "td":"4444",
        "cd":"6666"
      },
      "r6mthAvgBal":{
        "sd":"2000",
        "td":"2000",
        "cd":"2000"
      }
    },
    "sdDetail":[
      {
        "acctNbr":"",
        "currencyCode":"",
        "fxCurrentBal":"",
        "ntdCurrentBal":"",
        "currentIntRate":"",
        "ftpRate":"",
        "sdRemark":{
          "accBranchCode":"",
          "payrollCodeDtl":"",
          "isTrust":"",
          "isSecurities":"",
          "isRevers":""
        }
      }
    ],
    "tdDetail":[
      {
        "acctNbr":"",
        "currencyCode":"",
        "fxCurrentBal":"",
        "ntdCurrentBal":"",
        "currentIntRate":"",
        "ftpRate":"",
        "acctOpenDate":"",
        "tdDueDate":""
      }
    ],
    "cdDetail":[
      {
        "acctNbr":"",
        "ntdCurrentBal":"",
        "cdRemark":{
          "dishY3ChkCnt":"",
          "dishCancelY3ChkCnt":"",
          "rejectedStatusInd":"",
          "isReverse":""
        }
      }
    ]
  }
}



const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: '*',
};

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());


// 基本資訊 > 公司資訊第一層
app.post('/custprofile/getCBCompany', function (req, res, next) {
  console.log('POST /custprofile/getCBCompany');
  res.json(contribution);
});

// 基本資訊 > 集團資訊第一層
app.post('/custprofile/getCBGroup', function (req, res, next) {
  console.log('POST custprofile/getCBGroup');
  res.json(contribution);
});

// 基本資訊 > 經管資訊第一層
app.post('/custprofile/getCBManage', function (req, res, next) {
  console.log('POST custprofile/getCBManage');
  res.json(contribution);
});

// 基本資訊 > 貢獻度第一層
app.post('/custprofile/getCBContribution', function (req, res, next) {
  console.log('POST /custprofile/getCBContribution');
  console.log(req.body.body);
  if (req.body.body.customerId.indexOf('1') > -1) {
    console.log('取得 data 1');
    res.json(contribution);
  } else {
    console.log('取得 data 2');
    res.json(contribution2);
  }
});


// 營運量 > 存款第一層
app.post('/product/getCBDeposit', function (req, res, next) {
  console.log('POST /assetsLibilities/getCBDeposit');
  console.log(req.body.body);
  res.json(assetsLibilities);

});
// 營運量 > 放款&貿融第一層
app.post('/product/getCBLoan', function (req, res, next) {
  console.log('POST /assetsLibilities/getCBLoan');
  console.log(req.body.body);
  res.json(assetsLibilities);

});
// 營運量 > 進口&出口第一層
app.post('/product/getCBTrade', function (req, res, next) {
  console.log('POST /assetsLibilities/getCBTrade');
  console.log(req.body.body);
  res.json(assetsLibilities);

});
// 營運量 > TMU&MTU第一層
app.post('/product/getCBTmu', function (req, res, next) {
  console.log('POST /assetsLibilities/getCBTmu');
  console.log(req.body.body);
  res.json(assetsLibilities);

});

app.listen(5000); //dedault port
console.log('Node.js web server at port 5000 is running..(customerProfile)')
