
//skapar webbserver
const express = require("express");
const app = express();
const port = 4000;

//routing
app.get("/", (req, res) => {
    res.send("hello world")
});

//starta
app.listen(port, () => {
    console.log("server started on port" + port)
});