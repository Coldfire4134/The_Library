var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('logOn', { title: 'Log On' });
});

module.exports = router;
