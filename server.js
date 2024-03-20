
//skapar webbserver
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs") //view engine EJS
app.use(express.static("static-map"));  //statiska filer i katalogen static-map

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