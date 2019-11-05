// CB020-Composite API-基本資訊-貢獻度第一層
const contribution1 = {
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
	  "customerid":"A1111111111",
	  "lastcontri":{
		"startym":"201712",
		"endym":"201805",
		"profittype1":"5000",
		"profittype2":"10000",
		"profittype3":"15000",
		"profittype4":"20000",
		"profittype5":"25000",
		"profittype6":"30000",
	  },
	  "thiscontri":{
		"startym":"201812",
		"endym":"201905",
		"profittype1":30000,
		"profittype2":25000,
		"profittype3":20000,
		"profittype4":15000,
		"profittype5":10000,
		"profittype6":5000,
	  }
	}
  }
  
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
	  "customerid":"A222222222",
	  "lastcontri":{
		"startym":"201712",
		"endym":"201805",
		"profittype1":"1",
		"profittype2":"2",
		"profittype3":"2",
		"profittype4":"3",
		"profittype5":"5",
		"profittype6":"6",
	  },
	  "thiscontri":{
		"startym":"201812",
		"endym":"201905",
		"profittype1":"10",
		"profittype2":"22",
		"profittype3":"33",
		"profittype4":"55",
		"profittype5":"55",
		"profittype6":"66",
	  }
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
	res.json(contribution1);
});

// 基本資訊 > 集團資訊第一層
app.post('/custprofile/getCBGroup', function (req, res, next) {
	console.log('POST custprofile/getCBGroup');
	res.json(contribution1);
});

// 基本資訊 > 經管資訊第一層
app.post('/custprofile/getCBManage', function (req, res, next) {
	console.log('POST custprofile/getCBManage');
	res.json(contribution1);
});

// 基本資訊 > 貢獻度第一層
app.post('/custprofile/getCBContribution', function (req, res, next) {
	console.log('POST /custprofile/getCBContribution');
	console.log(req.body.body);
	if(req.body.body.customerId.indexOf('1') > -1){
		console.log('取得 data 1');
		res.json(contribution1);
	}else{
		console.log('取得 data 2');
		res.json(contribution2);
	}
});


app.listen(5000); //dedault port
console.log('Node.js web server at port 5000 is running..(customerProfile)')
