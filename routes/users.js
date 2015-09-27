var express = require('express');
var router = express.Router();



var phones = require('../data/phones.json');

/* GET phone listing. */
router.get('/', function(req, res, next) {
  res.json(phones);
});

router.put('/', function(req, res){
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
