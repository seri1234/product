'use strict';
var express = require('express');
var router = express.Router();
var Postdb  = require('../models/postdb');

var basicAuth = require('basic-auth-connect');

router.use(basicAuth('user', 'passw0rD'));

router.get('/', function(req, res, next) {
  console.log(req.body); // ログ
  Postdb.findAll({ order: [['id', 'DESC']] }).then((Postdb) => {
    res.render('delete', {
      Postdb: Postdb
    });
  });
});

router.post('/delete', (req, res, next) =>{
          Postdb.findById(req.body.id).then((Postdb) => {
              Postdb.destroy().then(() => {
                res.redirect('/');
              });
          });
          });

module.exports = router;