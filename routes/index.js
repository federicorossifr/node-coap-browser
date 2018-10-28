var express = require('express');
var router = express.Router();
var coapApi = require("../lib/coap-api/coap-api.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome Home' });
});

router.post('/discover',function(req,res,next){
	coapApi.discover(req.body.host).then(dis => {res.json(dis)});
});

router.get('/endpoint',function(req,res,next) {
	res.render('endpoint',{endpoint: req.query.name, host:req.query.host});
})

router.post('/request',function(req,res,next) {
	var method = req.body.method;
	var fun = coapApi[method];
	console.log(req.body);
	fun(req.body.host,req.body.endpoint,req.body.query,req.body.payload)
	.then(r => {res.json(r)});
});

module.exports = router;
