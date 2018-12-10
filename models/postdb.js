'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/product',
  {
    logging: false,
    operatorsAliases: false 
  });
var Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
}, {
  freezeTableName: true,
  timestamps: true
});



Post.sync();
module.exports = Post;