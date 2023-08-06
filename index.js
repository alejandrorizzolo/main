const express = require("express");
const app = express();
const path = require("path");

app.disable('x-powered-by')

//Settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

//Routers
app.use(require("./src/routes/route"));

//Static files
app.use(express.static(path.join(__dirname, "src/public")));

//Listening the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});