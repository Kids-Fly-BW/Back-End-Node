const knex = require("knex");

const db = require("../knexfile");

const dbn = process.env.NODE_ENV || "development";

module.exports = knex(db[dbn]);
