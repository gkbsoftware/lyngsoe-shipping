require('dotenv').config();

var express = require('express');
var router = express.Router();

// var crypto = require('crypto');
var secret = process.env.COOKIE_KEY;
// var hash = crypto.createHmac('sha256', secret).digest('hex');
// console.log(hash);

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.signedCookies.userId) {
    // res.redirect('/')
    res.send('logged in')
  }
  else {
    res.cookie('userId', 100, {signed: true})
  }
  res.redirect('/users/sign_up');
});

router.get('/sign_up', function(req, res, next) {
  res.render('index.ejs', {title: "Sign Up", routePath: "../javascripts/bundle.js"})
  // res.send('signup')
});

router.get('/log_out', function(req, res, next) {
  res.clearCookie('userId')
  res.send('logged out')
});

module.exports = router;
