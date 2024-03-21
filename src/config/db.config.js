const mysql = require('mysql');
const { logger } = require('../utils/logger');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require('../utils/secrets');
const os = require('os'); 
var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'i-project'
    });


if(os.hostname() !== "Nanangs-MacBook-Pro.local")
{

    console.log("SERVER");
    connection = mysql.createConnection({
        host: "localhost",
        user: "premis",
        password: "DTCMtolong313",
        database: 'premis'
    });

}

connection.connect((err) => {
    if (err) logger.error(err.message);
    else logger.info('Database connected')
});

module.exports = connection;
