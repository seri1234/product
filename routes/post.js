
'use strict';
var express = require('express');
var app = express();
var router = express.Router();

var Postdb  = require('../models/postdb');


//basic auth
var basicAuth = require('basic-auth-connect');
router.use(basicAuth('user', 'node'));

//Post page
router.get('/',(req, res, next) => {
  res.render('post', {

  });
});

//Post API
router.post('/new', (req, res, next) => {
  Postdb.create({
  　title: req.body.title.slice(0, 255),
    content: req.body.content,
  }).then(() => {
     res.redirect('/');
  });
  
});

module.exports = router;
