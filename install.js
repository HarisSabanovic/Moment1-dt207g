const mysql = require("mysql");

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

//sätter in värden
connection.query(`INSERT INTO COURSES (COURSE_NAME, COURSE_CODE, COURSE_LINK, COURSE_PROGRESSION) VALUES
('Webbutveckling I', 'DT057G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/', 'A'),
('Introduktion till programmering i JavaScript', 'DT084G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/', 'A'),
('Grafisk teknik för webb', 'DT200G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT200G/', 'A'),
('Webbanvändbarhet', 'DT068G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT068G/', 'B'),
('Databaser', 'DT003G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT003G/', 'A'),
('Frontend-baserad webbutveckling', 'DT211G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT211G/', 'B'),
('Backend-baserad webbutveckling', 'DT207G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT207G/', 'B'),
('Programmering i TypeScript', 'DT208G', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/', 'B')`, (error, results) => {
    if(error) throw error;
    console.log("Values have been inserted: " + results);
});
