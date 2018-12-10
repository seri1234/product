
'use strict';
var express = require('express');
var app = express();
var router = express.Router();

var Postdb  = require('../models/postdb');


//basic auth
var basicAuth = require('basic-auth-connect');                  //test 
router.use(basicAuth('user', 'passw0rD'));                      //test

//Post page
router.get('/',(req, res, next) => {
  console.log(req.body); // ログ
  res.render('post', {
    
  });
});

//Post API
router.post('/new', (req, res, next) => {
console.log(req.body); // ログ
  Postdb.create({
      　title: req.body.title.slice(0, 255),
        content: req.body.content,
      }).then(() => {
        res.redirect('/');
      });
  
});

module.exports = router;
