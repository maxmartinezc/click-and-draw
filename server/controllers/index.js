var express = require('express');
var router = express.Router();

//controllers
var terms = require('./terms');
router.use('/api/terms', terms);

router.get('*', function(req, res, next) {
  res.render("index/index.html");
});

module.exports = router;