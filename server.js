// Dependencies
var express = require("express");
// var methodOverride = require("method-override");
// var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controllers.js");
// var path = require("path");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up rendering engine, Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use("/", router);


// Start server
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});