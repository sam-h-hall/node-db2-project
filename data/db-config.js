// modularity --> we create this one time and every file that needs it can use it without rewriting configuredKnex;
const knex = require("knex");

const knexConfig = require("../knexfile.js");

const configuredKnex = knex(knexConfig.development);

module.exports = configuredKnex;