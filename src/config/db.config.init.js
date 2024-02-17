const mysql = require('mysql');
const { logger } = require('../utils/logger');
const { DB_HOST, DB_USER, DB_PASS } = require('../utils/secrets');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'ifleet'
});

connection.connect((err) => {
    if (err) logger.error(err.message);
});

module.exports = connection;


