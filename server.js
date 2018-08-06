//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//We're using express
var app = express();

// just saving our port in a variable
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Gives access to css and js files in the public folder
app.use(express.static('public'))
//The 'requires' below sends our server to routing files.
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Port listener: 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});