const express = require("express");
const path = require("path");

const server = express();
const PORT = 3000;

// Settings
server.set("port", PORT);
server.set("views", path.join(__dirname, "src/views"));
server.set("view engine", "ejs");

// Disable x-powered-by header
server.disable('x-powered-by');

// Static files
server.use(express.static(path.join(__dirname, "src/public")));

// Routers
server.use(require("./src/routes/route"));

// Listening the server
server.listen(PORT, () => {
  console.log("Server on port", PORT);
});