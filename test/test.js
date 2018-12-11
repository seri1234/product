'use strict';
var request = require('supertest');
var app = require('../app');
var Postdb  = require('../models/postdb');
var basicAuth = require('basic-auth-connect');

//認証機能は外した状態でテストです

describe('テスト', () => {
    it('ブログに書き込み後、リダイレクトされる', (done) => {
      request(app)
      .auth(basicauth,{user,node})
      .post('/posts/new')
      .send({ title: '自動テストタイトル', content: '自動テスト本文' })
      .expect('Location', '/')
      .expect(302, done);
    });


    it('書き込んだ内容がメインページに反映される', (done) => {
      request(app)
      .get('/')
      .expect(/自動テストタイトル/)
      .expect(/自動テスト本文/)
      .expect(200, done);
    });

});