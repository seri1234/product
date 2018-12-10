'use strict';
var express = require('express');
var router = express.Router();
var Postdb  = require('../models/postdb');


/* GET home page. */
router.get('/', function(req, res, next) {
  Postdb.findAll({ order: [['id', 'DESC']] }).then((Postdb) => {
    res.render('index', {
      Postdb: Postdb
    });
  });
});

//Logout
router.get('/logout', function(req, res, next) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
    res.end('<!DOCTYPE html><html lang="ja"><body>' +
      '<h1>ログアウトしました</h1>' +
      '<a href="/">メインページへ</a>' +
      '</body></html>'

);
});



module.exports = router;
