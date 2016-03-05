require('dotenv').config();

var crypto = require('crypto');
var secret = process.env.COOKIE_KEY;
var hash = crypto.createHmac('sha256', secret).digest('hex');

console.log(hash);