const Party = require('../db').Party;

const findAll = () => Party.findAll();

module.exports = {
  findAll,
};
