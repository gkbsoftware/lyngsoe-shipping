var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.signedCookies.userId) {
    console.log("Logged in as: " + req.signedCookies.userId);
    res.render('index.ejs', { title: 'Lyngsoe Shipping', routePath: "javascripts/bundle.js"});
  }
  else {
    res.redirect('/users')
  }
});

router.get('/test', function(req, res, next) {
  res.render('test.jsx', {title: 'Test', myTest: 5})
})

module.exports = router;
