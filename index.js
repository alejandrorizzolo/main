import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import routes from "./src/routes/route.js";

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// Settings
server.set("port", PORT);
server.set("views", path.join(__dirname, "src/views"));
server.set("view engine", "ejs");

// Disable x-powered-by header
server.disable('x-powered-by');

// Static files
const publicDirectory = path.join(__dirname, "src/public");
server.use(express.static(publicDirectory));

// Routers
server.use(routes);

// Listening the server
server.listen(PORT, () => {
  console.log("Server on port", PORT);
});