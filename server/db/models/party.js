'use strict';

const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('parties', {
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
