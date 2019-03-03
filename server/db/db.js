// const app = require('APP')
const Sequelize = require('sequelize');
// const name = (app.env.DATABASE_NAME || 'dogparty')
// const url = app.env.DATABASE_URL || `postgres://localhost:5432/${name}`
const url = 'postgres://localhost:5432/dogparty';

// console.log('connecting to sequelize db..');

const db = new Sequelize(url, {
  operatorsAliases: false,
  // ^ ALWAYS set this to false to avoid potential sql injections
  // string based operators should be disabled by default
  // See github issue: https://github.com/sequelize/sequelize/issues/8417
  logging: require('debug')('sql'),
  // ^ export DEBUG=sql in the environment to
  // get SQL queries
  define: {
    underscored: true,
    // ^ use snake_case rather than camelCase column names.
    // these are easier to work with in psql.
    freezeTableName: true,   // don't change table names from the one specified
    timestamps: true,        // automatically include timestamp columns
  }
});

module.exports = db;
