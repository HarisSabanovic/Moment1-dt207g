const mysql = require("mysql");

//inställningar
const connection = mysql.createConnection({
    host: "localhost",
    user: "course_db",
    password: "harissparris",
    database: "course_db"
});

connection.connect((error) => {
    if(error) {
        console.error("connection failed " + error);
        return;
    }

    console.log("connected to MySQL");
})

//skapar tabell
connection.query(`CREATE TABLE COURSES (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    COURSE_CODE VARCHAR(8),
    COURSE_NAME VARCHAR(100),
    COURSE_LINK VARCHAR(300),
    COURSE_PROGRESSION VARCHAR(2))`, (error, results) => {
        if(error) throw error;
        console.log("Table users created: " + results);
    });