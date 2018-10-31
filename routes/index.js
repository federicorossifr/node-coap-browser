var express = require('express');
var router = express.Router();
var coapApi = require("coap-api");

router.get('/', function(req, res, next) {
  var host = (req.query.host)?req.query.host:"";
  res.render('index', { title: 'Welcome Home', host:host });
});

router.post('/discover',function(req,res,next){
	coapApi.discover(req.body.host)
	.then(dis => {res.json(dis)})
	.catch(err => {res.json(err)});
});

router.get('/endpoint',function(req,res,next) {
	res.render('endpoint',{endpoint: req.query.name, host:req.query.host});
})

router.post('/request',function(req,res,next) {
	var method = req.body.method;
	var fun = coapApi[method];
	fun(req.body.host,req.body.endpoint,req.body.query,req.body.payload)
	.then(r => {res.json(r)})
	.catch(err => {res.json(err)});
});

module.exports = router;
