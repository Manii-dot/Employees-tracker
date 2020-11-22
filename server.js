const mysql = require("mysql");
const inquirer = require("inquirer");

const PORT = 3333;

const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "L@ur@1990",
    database: "employeeTrakerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Listening on port " + PORT)
    start();
})
