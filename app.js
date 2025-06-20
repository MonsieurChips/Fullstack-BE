// app.js

const express = require("express");
const cors = require("cors");
const path = require("path");
const loggerMiddleware = require("./src/middleware/logger");
const mainRouter = require("./src/routes");

// Initialize the Express application
const app = express();

// --- Middleware ---

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from your Vue.js frontend
app.use(cors());

// Enable the express.json middleware to parse JSON-formatted request bodies
app.use(express.json());

// Apply the custom logger middleware to log all incoming requests
// This fulfills a key requirement from your coursework.
app.use(loggerMiddleware);

// --- Static File Serving ---

// Serve static files (like lesson images) from the 'public' directory.
// This allows you to access images via URLs like: http://localhost:3000/images/your-image.png
app.use(express.static(path.join(__dirname, "public")));

// --- API Routes ---

// All API routes are prefixed with '/api'
app.use("/api", mainRouter);

// --- Error Handling (Optional but Recommended) ---

// Catch-all for 404 Not Found errors
app.use((req, res, next) => {
  res.status(404).send({ message: "Error: Route not found" });
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke on the server!" });
});

// Export the app module for use in server.js
module.exports = app;
