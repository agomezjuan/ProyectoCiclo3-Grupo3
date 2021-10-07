const express = require("express");
const path = require("path");
// const exphbs = require("express-handlebars");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
// app.engine(".hbs");

// Middlewares

// Global Variables

// Routes

// Static Files

// Server is listening
app.listen(app.get("port"), () => {
  console.log("Servidor establecido en el puerto", app.get("port"));
});
