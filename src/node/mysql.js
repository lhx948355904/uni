

(async () => {
    const mysql = require("mysql2/promise");

    const cfg = {
        host:"localhost",
        user:"root",
        password:"lhxroot",
        database:"nodetest"
    }

    const connection = await mysql.createConnection(cfg);

    let ret = await connection.execute(`
        CREATE TABLE IF NOT EXISTS User (
            id VARCHAR(45) NOT NULL,
            username VARCHAR(45) NOT NULL,
            password VARCHAR(20) NULL,
        PRIMARY KEY (username))
    `)

    connection.end()
    
    console.log(123)
    console.log(connection)
    module.exports = connection;
})()

