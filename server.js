
//skapar webbserver
const express = require("express");
const app = express();
const bodyparser = require("body-parser"); //kunna ta emot formulär
const port = 3000;

app.set("view engine", "ejs") //view engine EJS
app.use(express.static("static-map"));  //statiska filer i katalogen static-map
app.use(bodyparser.urlencoded({extended: true}));

//skapar connection till mysql


//routing
app.get("/", (req, res) => {
    res.render("index");
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

