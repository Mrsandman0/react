var express = require('express');
var router = express.Router();
const request = require('request');
const proxy = require('http-proxy-middleware');
var {
  connect,
  insert,
  find,
  ObjectId
} = require("../libs/mongo.js");
var token = require("../libs/token.js");

router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  // 跨域请求CORS中的预请求
  if (req.method == "OPTIONS") {
      res.send(200); /*让options请求快速返回*/
  } else {
      next();
  }
});
router.get('/city', function (req, res, next) {
  request.get('http://www.springtour.com/w/home/queryAllCity', (error, response, body) => {
        res.send(body);
    })
});
module.exports = router;
