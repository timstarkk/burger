const express = require('express');


const PORT = process.env.PORT || 3333;
const app = express();

// set the public folder to be available on client side
app.use(express.static('public'));
// ------------------

// prepare express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// -------------------

// initialize handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// -------------------

// link to routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
// -------------------


app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});