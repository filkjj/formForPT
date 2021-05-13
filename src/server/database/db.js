const { Sequelize } = require('sequelize');

const db = new Sequelize(
    process.env.DATABASE_URL || "postgres://localhost/testStartup"
);

module.exports = db