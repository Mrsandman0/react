var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
var {
  connect,
  insert,
  find,
  ObjectId
} = require("../libs/mongo.js");
var token = require("../libs/token.js");


router.all('*', function (req, res, next) {
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
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', async (req, res, next) => {
  let { username, password } = req.body;
  let data = await find(`userlist`, {
    username,
    password
  })
  console.log(username, password)
  if (data.length) {
    res.send({
      status: "success",
      token: token.createToken({
        username,
        password
      }, 600)
    });
  } else {
    res.send({
      status: "fail"
    });
  }

})

router.post('/verifytoken', async (req, res, next) => {
  let check = req.body.headers.token;
  console.log(check)
  res.send({
    states: token.checkToken(check)
  })
})

module.exports = router;
