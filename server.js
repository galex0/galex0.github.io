const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function () {
    console.log("Server is running at http://localhost:3000")
})