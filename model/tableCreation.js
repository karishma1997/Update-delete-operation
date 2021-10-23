const con = require("../database/connection.js")
const dotenv = require('dotenv')
dotenv.config()
con.connection.connect(function (err) {
    if (err) throw err;
    var AUTHOR_TABLE = `CREATE TABLE if not exists ` + process.env.DB_DATABASE + "." + `author (
       author_name VARCHAR(45) NOT NULL,
        born INT(4) NOT NULL,
        died INT(4) NOT NULL,
        country VARCHAR(45) NOT NULL,
        bookcount INT(5) NOT NULL,
        ISBN INT(10) NOT NULL,
        PRIMARY KEY (ISBN))`;
    con.connection.query(AUTHOR_TABLE, function (err, result) {
        if (err) throw err;
        if (!result) {
            console.log("Database already exist")
        } else {
            console.log("Author table created");
        }
    });
    var sql = `CREATE TABLE if not exists ` + process.env.DB_DATABASE + "." + `book (
        ISBN INT NOT NULL,
        title VARCHAR(45) NOT NULL,
        published INT(4) NOT NULL,
        publisher VARCHAR(45) NOT NULL,
        edition VARCHAR(45) NOT NULL,
        language VARCHAR(45) NOT NULL,
        PRIMARY KEY (ISBN))`;
    con.connection.query(sql, function (err, result) {
        if (err) throw err;

        console.log("Book table created");

    });
});




