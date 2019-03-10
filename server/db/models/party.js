'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('parties', {
  event: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.BIGINT,
    allowNull: false
  }
});
