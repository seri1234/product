'use strict';
const request = require('supertest');
const app = require('../app');

describe('/posts', () => {

  it('ログインのためのリンクが含まれる', (done) => {
    request(app)
      .get('/posts')
      .auth('user', 'passw0rD')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(/記事投稿画面/)
      .expect(200, done);
  });

});