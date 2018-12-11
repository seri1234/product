'use strict';
var express = require('express');
var router = express.Router();
var Postdb  = require('../models/postdb');

//basic auth
var basicAuth = require('basic-auth-connect');
router.use(basicAuth('user', 'node'));

//Delete page
router.get('/', function(req, res, next) {
  Postdb.findAll({ order: [['id', 'DESC']] }).then((Postdb) => {
    res.render('delete', {
      Postdb: Postdb
    });
  });
});

//Delete API
router.post('/delete', (req, res, next) =>{
  Postdb.findById(req.body.id).then((Postdb) => {
      Postdb.destroy().then(() => {
        res.redirect('/');
      });
   });
});

module.exports = router;