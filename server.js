
//skapar webbserver
const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyparser = require("body-parser"); //kunna ta emot formulär
const port = 3000;

app.set("view engine", "ejs") //view engine EJS
app.use(express.static("static-map"));  //statiska filer i katalogen static-map
app.use(bodyparser.urlencoded({extended: true}));

//skapar connection till mysql
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




//routing
app.get("/", (req, res) => {  
    connection.query("SELECT * FROM courses", function (err, course) {
        if (err) {
            console.error("Error executing query:", err);
            return;
        } 
        console.log(course);
        res.render("index", {courses: course});
    });

});

app.get("/addcourse", (req, res) => {
    res.render("addcourse");
});

app.get("/about", (req, res) => {
    res.render("about");
});

//starta
app.listen(port, () => {
    console.log("server started on port " + port)
});

