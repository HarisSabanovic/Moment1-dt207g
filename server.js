
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

        res.render("index", {courses: course});
    });


});

app.get("/addcourse", (req, res) => {
    res.render("addcourse");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/addcourse", (req, res) => {

    let newCode = req.body.code;
    let newName = req.body.name;
    let newLink = req.body.link;
    let newProg = req.body.prog;

    let error = [];

    if(newCode === "") {
        error.push("Ange korrekt kurskod");
    } else if (newName === ""){
        error.push("Ange korrekt kursnamn");
    } else if (newLink === ""){
        error.push("Ange korrekt länk");
    } else if (newProg === ""){
        error.push("Ange korrekt Progression");
    } else {
        connection.query("INSERT INTO courses (course_code, course_name, course_link, course_progression) VALUES (?, ?, ?, ?)", [newCode, newName, newLink, newProg], function (err, course) {
            if (err) {
                console.error("Error executing query:", err);
                return;
            } 
        });
    }

    res.render("addcourse", {error: error});
});

app.get("/delete/:id", (req, res) => {
    let id = req.params.id;
    connection.query("DELETE FROM COURSES WHERE ID=" + id, (err) => {
        if(err) {
            console.error("Could not delete row " + err);
            return;
        }

        res.redirect("/");
    });

});

//starta
app.listen(port, () => {
    console.log("server started on port " + port)
});


